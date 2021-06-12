import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import { persistedRootReducer } from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === "production") {
  console.log("this is prod");
  middlewares.push(logger);
}

export const store = createStore(
  persistedRootReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);
