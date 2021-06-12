import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import { persistedRootReducer } from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

if (process.env.NODE_ENV === "production") {
  console.log("this is prod");
}

export const store = createStore(
  persistedRootReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);
