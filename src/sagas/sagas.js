import { fork } from 'redux-saga/effects';

const nullFuction = () => null;

function* rootSaga() {
  yield fork(nullFuction);
}

export default rootSaga;
