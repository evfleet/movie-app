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
    case EntityActionTypes.UPDATE_ENTITY:
    case EntityActionTypes.MERGE_ENTITIES:
    default:
      return state;
  }
};

export default entityReducer;
