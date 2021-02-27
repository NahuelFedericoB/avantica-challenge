import { call, put, select, takeLatest } from 'redux-saga/effects';

import { PERFORM_SEARCH } from './actionTypes';
import { setSearchResults, setIsLoadingSearch } from './actions';
import { getSummaryFilters } from './selectors';
import { getSearchFromGoogle, getSearchFromBing } from './services';

function* runPerformSearchSaga() {
  const params = yield select(getSummaryFilters);
  const searchEngine = params.dropDown;
  const seachQuery = params.textBar;
  yield put(setIsLoadingSearch(true));

  if (searchEngine === 'google') {
    const searchResults = yield call(getSearchFromGoogle, seachQuery);
    yield put(setSearchResults(searchResults));
    yield put(setIsLoadingSearch(false));

    return;
  }

  if (searchEngine === 'bing') {
    const searchResults = yield call(getSearchFromBing, seachQuery);
    yield put(setSearchResults(searchResults));
    yield put(setIsLoadingSearch(false));

    return;
  }

  const googleSearchResults = yield call(getSearchFromGoogle, seachQuery);
  const bingSearchResults = yield call(getSearchFromBing, seachQuery);
  const searchResults = [...googleSearchResults, ...bingSearchResults];

  yield put(setSearchResults(searchResults));
  yield put(setIsLoadingSearch(false));
}

function* runPerformSearchWatcher() {
  yield takeLatest(PERFORM_SEARCH, runPerformSearchSaga);
}

export { runPerformSearchWatcher, runPerformSearchSaga };
