import {
  FILTER_STOPS,
  FILTER_AND,
  FILTER_OR,
  VBB_REQUEST,
  VBB_SUCCESS,
  VBB_FAILURE,
  HANDLE_CHANGE,
  NO_FILTERS,
} from '../actions/actionTypes';
import stops from '../data/stops';

const initialState = {
  allStops: stops,
  selection: stops,
  stop: {},
  loading: false,
  data: [],
  viewdata: [],
  error: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_STOPS:
      const stopDefault = state.stop;
      let furtherStops;
      if (action.filter === '@init') {
        furtherStops = state.allStops.filter(
          stop => stop.name !== stopDefault.name
        );
      } else if (action.filter !== '') {
        furtherStops = state.allStops.filter(
          stop =>
            stop.name.toLowerCase().includes(action.filter.toLowerCase()) &&
            stop.name !== stopDefault.name
        );
      } else {
        furtherStops = state.allStops.filter(
          stop => stop.name !== stopDefault.name
        );
      }
      const stopArray = [stopDefault, ...furtherStops];
      return { ...state, selection: stopArray };
    case NO_FILTERS:
      return { ...state, viewdata: state.data };
    case VBB_REQUEST:
      return { ...state, loading: true, data: [], error: null };
    case VBB_SUCCESS:
      return {
        ...state,
        loading: false,
        stop: action.stop,
        data: action.data,
        viewdata: action.data,
        error: null,
      };
    case VBB_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        viewdata: [],
        error: action.error,
      };
    case FILTER_OR:
      const filteredOr = filterOr(state.data, action.filter);
      return { ...state, viewdata: filteredOr };
    case FILTER_AND:
      const filteredAnd = filterAnd(state.data, action.filter);
      return { ...state, viewdata: filteredAnd };
    case HANDLE_CHANGE:
      return { ...state, stop: action.stop, selection: state.allStops };
    default:
      return state;
  }
}

const filterOr = (data, filterValues) => {
  const filteredData = data.filter(departure => {
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
  return filteredData;
};

const filterAnd = (data, filterValues) => {
  const filteredData = data.filter(departure => {
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
  return filteredData;
};
