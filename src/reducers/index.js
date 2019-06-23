import {
  FILTER_STOPS,
  FILTER_AND,
  FILTER_OR,
  VBB_REQUEST,
  VBB_SUCCESS,
  VBB_FAILURE,
  HANDLE_CHANGE
} from "../actions/actionTypes";
import stops from "../data/stops";

const initialState = {
  allStops: stops,
  selection: stops,
  stop: {
    id: "900000160541",
    name: "Josef-Orlopp-Str./Vulkanstr.",
    type: "BLN"
  },
  loading: false,
  data: [],
  viewdata: [],
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_STOPS:
      const stopDefault = state.stop;
      const furtherStops =
        action.filter !== ""
          ? state.allStops.filter(
              stop =>
                stop.name.toLowerCase().includes(action.filter.toLowerCase()) &&
                stop.name !== stopDefault.name
            )
          : state.allStops.filter(stop => stop.name !== stopDefault.name);
      const stopArray = [stopDefault, ...furtherStops];
      return { ...state, selection: stopArray };
    case VBB_REQUEST:
      return { ...state, loading: true, data: [], error: null };
    case VBB_SUCCESS:
      return { ...state, loading: false, data: action.data, error: null };
    case VBB_FAILURE:
      return { ...state, loading: false, data: [], error: action.error };
    case FILTER_OR:
      const filteredOr = filterOr(state.data, action.filter);
      return { ...state, viewdata: filteredOr };
    case FILTER_AND:
      const filteredAnd = filterAnd(state.data, action.filter);
      return { ...state, viewdata: filteredAnd };
    case HANDLE_CHANGE:
      return { ...state, stop: action.stop };
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
