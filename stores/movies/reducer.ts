const movieState = {
  test: false
};

const movieReducer = (state = movieState, action) => {
  switch (action.type) {
    case "TEST_ACTION":
      return {
        test: true
      };

    default:
      return state;
  }
};

export default movieReducer;
