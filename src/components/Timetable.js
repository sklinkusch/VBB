import React, { useRef } from 'react';
import { connect } from 'react-redux';
import '../styles/Timetable.scss';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import StopBody from './StopBody';
import Filter from './Filter';
import Home from './Home';
import NoMatch from './NoMatch';
import { Switch, Route } from 'react-router-dom';
import {
  HANDLE_CHANGE,
  FILTER_STOPS,
  VBB_REQUEST,
  FILTER_AND,
  FILTER_OR,
  NO_FILTERS,
} from '../actions/actionTypes';

function Timetable(props) {
  const {
    selection,
    stop,
    setStop,
    filterStops,
    getData,
    filterAnd,
    filterOr,
    noFilters,
  } = props;
  const inputField = useRef(null);
  const filterField = useRef(null);
  const filterSelector = useRef(null);
  const filterData = event => {
    if (event.key === 'Enter') {
      if (filterField.current.value !== '') {
        const filterValues = filterField.current.value.split(' ');
        const filterMode = filterSelector.current.value;
        if (filterMode === 'OR') {
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
    if (event.key === 'Enter') {
      const filterValue = event.target.value;
      filterStops(filterValue);
    }
  };
  const handleChange = myStop => {
    setStop(myStop);
    getData(myStop);
    inputField.current.value = '';
    filterField.current.value = '';
    filterSelector.current.value = 'OR';
  };
  const handleSubmit = () => {
    // console.log(stop);
    getData(stop);
    inputField.current.value = '';
    filterField.current.value = '';
    filterSelector.current.value = 'OR';
  };
  // useEffect(() => {
  //   getData(stop);
  // }, []);
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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={StopBody} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

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
)(Timetable);
