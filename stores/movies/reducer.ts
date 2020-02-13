import { MovieActions, MovieActionTypes } from "./actions";

export interface MovieState {
  test: boolean;
}

const movieState: MovieState = {
  test: false
};

const movieReducer = (state = movieState, action: MovieActions) => {
  switch (action.type) {
    case MovieActionTypes.GET_MOVIE_BY_ID:
    case MovieActionTypes.GET_CURRENT_MOVIES:
      return {
        test: true
      };

    default:
      return state;
  }
};

export default movieReducer;
