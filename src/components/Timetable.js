import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import "../styles/Timetable.scss";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import TableData from "./TableData";
import StopName from "./StopName";
import Error from "./Error";
import Filter from "./Filter";
import { getDuration } from "./helpers";
import {
  HANDLE_CHANGE,
  FILTER_STOPS,
  VBB_REQUEST,
  FILTER_AND,
  FILTER_OR,
  NO_FILTERS
} from "../actions/actionTypes";

function Timetable(props) {
  const {
    selection,
    stop,
    viewdata,
    error,
    setStop,
    filterStops,
    getData,
    filterAnd,
    filterOr,
    noFilters
  } = props;
  const inputField = useRef(null);
  const filterField = useRef(null);
  const filterSelector = useRef(null);
  const filterData = (event) => {
    if(event.key === "Enter"){
      if (filterField.current.value !== "") {
      const filterValues = filterField.current.value.split(" ");
      const filterMode = filterSelector.current.value;
      if (filterMode === "OR") {
        filterOr(filterValues);
      } else {
        filterAnd(filterValues);
      }
    } else {
        noFilters();
    }
    }
  };
  const doFilter = event => {
    if (event.key === "Enter") {
      const filterValue = event.target.value;
      filterStops(filterValue);
    }
  };
  const handleChange = myStop => {
    setStop(myStop);
    getData(myStop);
    inputField.current.value = "";
    filterField.current.value = "";
    filterSelector.current.value = "OR";
  };
  const handleSubmit = () => {
    // console.log(stop);
    getData(stop);
    inputField.current.value = "";
    filterField.current.value = "";
    filterSelector.current.value = "OR";
  };
  useEffect(() => {
    getData(stop);
  }, []);
  const sortData = () => {
    if (viewdata !== null && viewdata !== undefined && viewdata.length > 0)
      return viewdata.sort((a, b) => {
        if (a.stop.name.toLowerCase() < b.stop.name.toLowerCase()) {
          return -1;
        } else if (b.stop.name.toLowerCase() < a.stop.name.toLowerCase()) {
          return +1;
        } else {
          const sortingArray = [
            "express",
            "regional",
            "suburban",
            "subway",
            "tram",
            "bus",
            "ferry"
          ];
          if (
            sortingArray.indexOf(a.line.product) <
            sortingArray.indexOf(b.line.product)
          ) {
            return -1;
          } else if (
            sortingArray.indexOf(b.line.product) <
            sortingArray.indexOf(a.line.product)
          ) {
            return +1;
          } else {
            return 0;
          }
        }
      });
  };
  const splitArray = myData => {
    let resultArray = [];
    let lowestValue = 0;
    if (myData === undefined) {
      return null;
    }
    while (lowestValue < myData.length) {
      let lowestResult = myData[lowestValue].stop.name;
      let highestValue;
      let filtered;
      for (let i = lowestValue; i < myData.length; i++) {
        if (myData[i].stop.name !== lowestResult) {
          highestValue = i;
          break;
        }
      }
      filtered = myData.slice(lowestValue, highestValue);
      resultArray.push(filtered);
      lowestValue = highestValue;
    }
    return resultArray;
  };
  const sortedData = sortData();
  const newData = splitArray(sortedData);
  const text = `In the next ${getDuration(
    stop.type
  )} minutes, no departures are planned for the station or stop you have chosen.`;
  return (
    <div className="timetable">
      <Input filterStops={doFilter} inputField={inputField} />
      <Select handleChange={handleChange} selection={selection} />
      <Button handleSubmit={handleSubmit} />
      <Filter
        filterField={filterField}
        filterSelector={filterSelector}
        filterData={filterData}
      />
      <StopName stop={stop.name} element="h2" />
      {error && <Error />}
      {newData !== undefined && newData !== null && newData.length > 0 ? (
        newData.map((depset, index) => {
          return (
            <TableData stop={depset[0].stop.name} data={depset} key={index} />
          );
        })
      ) : (
        <div>{text}</div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    selection: state.selection,
    stop: state.stop,
    loading: state.loading,
    viewdata: state.viewdata,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStop: stop => dispatch({ type: HANDLE_CHANGE, stop: stop }),
    filterStops: filter => dispatch({ type: FILTER_STOPS, filter: filter }),
    getData: stop => dispatch({ type: VBB_REQUEST, stop: stop }),
    filterAnd: filter => dispatch({ type: FILTER_AND, filter: filter }),
    filterOr: filter => dispatch({ type: FILTER_OR, filter: filter }),
    noFilters: () => dispatch({type: NO_FILTERS})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timetable);
