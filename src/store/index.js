import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "redux/reducers";
import createSagaMiddleware from "redux-saga";
import rootSagas from "redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const middleware = [sagaMiddleware];
const enhancers = [];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedMiddlewares = compose(
  applyMiddleware(...middleware),
  ...enhancers
);
const store = createStore(rootReducer, initialState, composedMiddlewares);
sagaMiddleware.run(rootSagas);

export default store;
