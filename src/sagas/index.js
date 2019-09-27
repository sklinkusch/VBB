import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  VBB_REQUEST,
  VBB_SUCCESS,
  VBB_FAILURE,
  FILTER_STOPS,
} from '../actions/actionTypes';
import { getDuration } from '../components/helpers';

export function* watcherSaga() {
  yield takeLatest(VBB_REQUEST, workerSaga);
}

function* workerSaga(action) {
  try {
    const { id, type = 'BBG' } = action.stop;
    const duration = getDuration(type);
    const response = yield call(() => fetchData(id, duration));
    const { data, status } = response;
    if (status === 500 || status !== 200) {
      throw new Error(`HTTP status code: ${response.status}`);
    }
    yield put({ type: VBB_SUCCESS, data: data, stop: action.stop });
    yield put({ type: FILTER_STOPS, filter: '@init' });
  } catch (error) {
    yield put({ type: VBB_FAILURE, error: error });
  }
}

function fetchData(id, duration) {
  const url = `https://sklinkusch-vbbmicro.now.sh/?station=${id}&duration=${duration}`;
  return axios.get(url);
}
