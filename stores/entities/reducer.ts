export interface EntityState {}

const entityState: EntityState = {};

const entityReducer = (state = entityState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default entityReducer;
