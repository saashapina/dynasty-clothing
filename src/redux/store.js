import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";

import { fetchCollectionsStart } from "./shop/sagas";

import { persistedRootReducer } from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(
  persistedRootReducer,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);
