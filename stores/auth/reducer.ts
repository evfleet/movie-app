export interface AuthState {}

const authState: AuthState = {};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
