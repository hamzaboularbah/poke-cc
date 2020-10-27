import { takeEvery, call, put } from "redux-saga/effects";

export default function* watcherSaga() {
  yield takeEvery("TEST_ACTION", testSaga);
}

function* testSaga() {
  console.log("test saga");
}
