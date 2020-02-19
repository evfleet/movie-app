import fetch from "isomorphic-unfetch";
import { call, put, takeLatest } from "redux-saga/effects";

import { EntityActionTypes, FetchEntitiesAction } from "./actions";

async function entityApi(url) {
  try {
    return fetch(`http://localhost:3000/api/${url}`).then(r => r.json());
  } catch (error) {}
}

function* fetchEntities({ payload: { url, page } }: FetchEntitiesAction) {
  try {
    const { results } = yield call(entityApi, url);
  } catch (error) {}
}

export default function* entitySaga() {
  yield takeLatest(EntityActionTypes.FETCH_ENTITIES, fetchEntities);
}
