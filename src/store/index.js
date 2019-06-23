import { createStore, applyMiddleware/*, compose*/ } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../sagas";
import { reducer } from "../reducers";

const sagaMiddleware = createSagaMiddleware();
/*const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composed = compose(
  applyMiddleware(sagaMiddleware),
  reduxDevtools
);*/

//export const store = createStore(reducer, composed);
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);
