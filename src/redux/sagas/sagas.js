import { fork } from 'redux-saga/effects';

import { runPerformSearchWatcher } from '../../SearchSummary/state/sagas';

function* rootSaga() {
  yield fork(runPerformSearchWatcher);
}

export default rootSaga;
