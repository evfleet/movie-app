import { put, takeLatest } from "redux-saga/effects";

function* fetchMovies() {
  yield put({ type: "FETCH_MOVIES_SUCCESS" });
}

export default function* movieSaga() {
  yield takeLatest("FETCH_MOVIES", fetchMovies);
}
