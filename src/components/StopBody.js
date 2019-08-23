import React, { useEffect } from 'react';
import StopName from './StopName';
import Error from './Error';
import TableData from './TableData';
import { getDuration } from './helpers';
import {
  HANDLE_CHANGE,
  FILTER_STOPS,
  VBB_REQUEST,
  FILTER_AND,
  FILTER_OR,
  NO_FILTERS,
} from '../actions/actionTypes';
import { connect } from 'react-redux';
import stops from '../data/stops';

const StopBody = ({ match, error, stop, viewdata, getData }) => {
  const { id } = match.params;
  useEffect(() => {
    const myStop = stops.filter(stop => stop.id === id)[0];
    getData(myStop);
  }, [match.params.id]);
  const sortData = () => {
    if (viewdata !== null && viewdata !== undefined && viewdata.length > 0)
      return viewdata.sort((a, b) => {
        if (a.stop.name.toLowerCase() < b.stop.name.toLowerCase()) {
          return -1;
        } else if (b.stop.name.toLowerCase() < a.stop.name.toLowerCase()) {
          return +1;
        } else {
          const sortingArray = [
            'express',
            'regional',
            'suburban',
            'subway',
            'tram',
            'bus',
            'ferry',
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
    return undefined;
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
  // const text = `In the next ${getDuration(
  //   stop.type || 'BLN'
  // )} minutes, no departures are planned for the station or stop you have chosen.`;
  const text = stop
    ? `In the next ${getDuration(
        stop.type
      )} minutes, no departures are planned for the station or stop you have chosen`
    : `In the next ${getDuration(
        'BLN'
      )} minutes, no departures are planned for the station or stop you have chosen`;
  return (
    <React.Fragment>
      <StopName stop={stop} element="h2" />
      {error ? (
        <Error />
      ) : newData !== undefined && newData !== null && newData.length > 0 ? (
        newData.map((depset, index) => {
          return (
            <TableData stop={depset[0].stop.name} data={depset} key={index} />
          );
        })
      ) : (
        <div>{text}</div>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    selection: state.selection,
    stop: state.stop,
    loading: state.loading,
    viewdata: state.viewdata,
    error: state.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStop: stop => dispatch({ type: HANDLE_CHANGE, stop: stop }),
    filterStops: filter => dispatch({ type: FILTER_STOPS, filter: filter }),
    getData: stop => dispatch({ type: VBB_REQUEST, stop: stop }),
    filterAnd: filter => dispatch({ type: FILTER_AND, filter: filter }),
    filterOr: filter => dispatch({ type: FILTER_OR, filter: filter }),
    noFilters: () => dispatch({ type: NO_FILTERS }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StopBody);
