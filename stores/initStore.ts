import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import authReducer from "./auth/reducer";
import entityReducer from "./entities/reducer";
import pageReducer from "./pages/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  entities: entityReducer,
  pages: pageReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const initStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  return store;
};
