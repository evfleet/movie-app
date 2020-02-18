import { applyMiddleware, createStore, combineReducers, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware, { Task } from "redux-saga";
import { all } from "redux-saga/effects";

import { authReducer } from "./auth";
import { entityReducer, entitySaga } from "./entities";
import { pageReducer } from "./pages";

const rootReducer = combineReducers({
  auth: authReducer,
  entities: entityReducer,
  pages: pageReducer
});

function* rootSaga() {
  yield all([entitySaga()]);
}

export type AppState = ReturnType<typeof rootReducer>;

export interface AppStore extends Store {
  sagaTask: Task;
}

export const initStore = (initialState = {}, { isServer, req = null }) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  ) as AppStore;

  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  }

  return store;
};
