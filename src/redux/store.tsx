import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";
const sagaMiddleware = createSagaMiddleware();

const middlewares: any = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
