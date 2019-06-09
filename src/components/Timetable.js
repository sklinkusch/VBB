import React, { Component } from "react";
import "../styles/Timetable.css";
import stops from "../data/stops";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import TableData from "./TableData";
import StopName from "./StopName";
import Error from "./Error";
import Filter from "./Filter";

export default class Timetable extends Component {
  constructor(props) {
    super(props);
    this.duration = 60;
    this.inputField = React.createRef();
    this.filterField = React.createRef();
    this.filterSelector = React.createRef();
    this.state = {
      data: null,
      viewdata: null,
      value: "900000160541",
      stop: "Josef-Orlopp-Str./Vulkanstr.",
      selection: stops
    };
  }
  filterAnd = filterValues => {
    const filteredData = this.state.data.filter(departure => {
      let decider = true;
      for (let i = 0; i < filterValues.length; i++) {
        if (
          departure.line.name
            .toLowerCase()
            .includes(filterValues[i].toLowerCase()) ||
          departure.direction
            .toLowerCase()
            .includes(filterValues[i].toLowerCase())
        ) {
          continue;
        } else {
          decider = false;
          break;
        }
      }
      return decider;
    });
    this.setState({ viewdata: filteredData });
  };
  filterData = () => {
    if (this.filterField.current.value === "") {
      this.setState({ viewdata: this.state.data });
    } else {
      const filterValues = this.filterField.current.value.split(" ");
      const filterMode = this.filterSelector.current.value;
      if (filterMode === "OR") {
        this.filterOr(filterValues);
      } else {
        this.filterAnd(filterValues);
      }
    }
  };
  filterOr = filterValues => {
    const filteredData = this.state.data.filter(departure => {
      let decider = false;
      for (let i = 0; i < filterValues.length; i++) {
        if (
          departure.line.name
            .toLowerCase()
            .includes(filterValues[i].toLowerCase()) ||
          departure.direction
            .toLowerCase()
            .includes(filterValues[i].toLowerCase())
        ) {
          decider = true;
          break;
        }
      }
      return decider;
    });
    this.setState({ viewdata: filteredData });
  };
  filterStops = value => {
    const stopDefault = { id: this.state.value, name: this.state.stop };
    let furtherStops;
    if (value !== "") {
      furtherStops = stops.filter(
        stop =>
          stop.name.toLowerCase().includes(value.toLowerCase()) &&
          stop.name !== this.state.stop
      );
    } else {
      furtherStops = stops.filter(stop => stop.name !== this.state.stop);
    }
    const selectedStops = [stopDefault, ...furtherStops];
    this.setState({ selection: selectedStops });
  };
  getData(stopid) {
    fetch(`https://sklinkusch-vbbmicro.now.sh/?${stopid}`)
      .then(response => {
        if (!response.ok) {
          let err = new Error(`HTTP status code: ${response.status}`);
          throw err;
        }
        return response.json();
      })
      .then(data => {
        this.setState({ error: null });
        return this.saveData(data);
      })
      .catch(error => {
        this.setState({ error: error });
        this.setState({ data: null });
        this.inputField.current.value = "";
      });
  }
  handleChange = (value, name) => {
    this.setState({ value: value, stop: name });
    this.getData(value);
  };
  handleSubmit = () => {
    // console.log(this.state.value);
    this.getData(this.state.value);
  };
  componentDidMount() {
    this.getData(this.state.value);
    this.filterStops("");
  }
  saveData = data => {
    // console.log(data);
    this.setState({ data: data });
    this.setState({ viewdata: data });
    this.setState({ selection: stops });
    this.inputField.current.value = "";
  };
  sortData() {
    if (
      this.state.viewdata !== null &&
      this.state.viewdata !== undefined &&
      this.state.viewdata.length > 0
    )
      return this.state.viewdata.sort((a, b) => {
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
  }
  splitArray(data) {
    let resultArray = [];
    let lowestValue = 0;
    if (data === undefined) {
      return null;
    }
    while (lowestValue < data.length) {
      let lowestResult = data[lowestValue].stop.name;
      let highestValue;
      let filtered;
      for (let i = lowestValue; i < data.length; i++) {
        if (data[i].stop.name !== lowestResult) {
          highestValue = i;
          break;
        }
      }
      filtered = data.slice(lowestValue, highestValue);
      resultArray.push(filtered);
      lowestValue = highestValue;
    }
    return resultArray;
  }
  render() {
    const data = this.sortData();
    const newData = this.splitArray(data);
    const text = `In the next ${
      this.duration
    } minutes, no departures are planned for the station or stop you have chosen.`;
    return (
      <div>
        <Input filterStops={this.filterStops} inputField={this.inputField} />
        <Select
          handleChange={this.handleChange}
          selection={this.state.selection}
        />
        <Button handleSubmit={this.handleSubmit} />
        <Filter
          filterField={this.filterField}
          filterSelector={this.filterSelector}
          filterData={this.filterData}
        />
        <StopName stop={this.state.stop} element="h2" />
        {this.state.error && <Error />}
        {newData !== undefined && newData !== null && newData.length > 0 ? (
          newData.map((depset, index) => {
            return (
              <TableData
                stop={depset[0].stop.name}
                data={depset}
                duration={this.state.duration}
                key={index}
              />
            );
          })
        ) : (
          <div>{text}</div>
        )}
      </div>
    );
  }
}
