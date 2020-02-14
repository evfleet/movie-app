import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

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
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};
