import { call, put, select, takeLatest } from 'redux-saga/effects';

import { PERFORM_SEARCH } from './actionTypes';
import { setGoogleSearchResults } from './actions';
import { getSummaryFilters } from './selectors';
import { getSearchFromGoogle } from './services';

function* runPerformSearchSaga() {
  const params = yield select(getSummaryFilters);
  const searchEngine = params.dropDown;
  const seachQuery = params.textBar;

  if (searchEngine === 'google') {
    const searchResults = yield call(getSearchFromGoogle, seachQuery);
    yield put(setGoogleSearchResults(searchResults));
  }
}

function* runPerformSearchWatcher() {
  yield takeLatest(PERFORM_SEARCH, runPerformSearchSaga);
}

export { runPerformSearchWatcher };
