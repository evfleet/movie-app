import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import movieReducer from "./movies/reducer";

const rootReducer = combineReducers({
  movies: movieReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const initStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};
