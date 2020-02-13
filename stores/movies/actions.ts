import { ActionCreator } from "redux";

export enum MovieActionTypes {
  GET_MOVIE_BY_ID = "GET_MOVIE_BY_ID",
  GET_CURRENT_MOVIES = "GET_CURRENT_MOVIES"
}

export interface GetMovieByIdAction {
  type: MovieActionTypes.GET_MOVIE_BY_ID;
}

export const getMovieById: ActionCreator<GetMovieByIdAction> = () => ({
  type: MovieActionTypes.GET_MOVIE_BY_ID
});

export interface GetCurrentMoviesAction {
  type: MovieActionTypes.GET_CURRENT_MOVIES;
}

export const getCurrentMovies: ActionCreator<GetCurrentMoviesAction> = () => ({
  type: MovieActionTypes.GET_CURRENT_MOVIES
});

export type MovieActions = GetMovieByIdAction | GetCurrentMoviesAction;
