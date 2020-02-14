export interface PageState {}

const pageState: PageState = {};

const pageReducer = (state = pageState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default pageReducer;
