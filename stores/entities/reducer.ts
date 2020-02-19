import { EntityActions, EntityActionTypes } from "./actions";

export interface EntityState {
  actors: {};
  genres: {};
  movies: {};
}

const entityState: EntityState = {
  actors: {},
  genres: {},
  movies: {}
};

const entityReducer = (state = entityState, action: EntityActions) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default entityReducer;
