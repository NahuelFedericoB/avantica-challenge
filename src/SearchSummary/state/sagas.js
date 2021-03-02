import { call, put, select, takeLatest } from 'redux-saga/effects';

import { getSearchFromGoogle, getSearchFromBing } from '../../services';

import { PERFORM_BING_SEARCH, PERFORM_BOTH_SEARCH, PERFORM_GOOGLE_SEARCH } from './actionTypes';
import { setSearchResults, setIsLoadingSearch } from './actions';
import { getSummaryFilters } from './selectors';

function* runGoogleSearchSaga() {
  yield put(setIsLoadingSearch(true));
  const { textBar } = yield select(getSummaryFilters);
  const searchResults = yield call(getSearchFromGoogle, textBar);

  yield put(setSearchResults(searchResults));
  yield put(setIsLoadingSearch(false));
}

function* runBingSearchSaga() {
  yield put(setIsLoadingSearch(true));
  const { textBar } = yield select(getSummaryFilters);
  const searchResults = yield call(getSearchFromBing, textBar);

  yield put(setSearchResults(searchResults));
  yield put(setIsLoadingSearch(false));
}

function* runBothSearchSaga() {
  yield put(setIsLoadingSearch(true));
  const { textBar } = yield select(getSummaryFilters);
  const googleSearchResults = yield call(getSearchFromGoogle, textBar);
  const bingSearchResults = yield call(getSearchFromBing, textBar);
  const searchResults = [...googleSearchResults, ...bingSearchResults];

  yield put(setSearchResults(searchResults));
  yield put(setIsLoadingSearch(false));
}

function* runPerformSearchWatcher() {
  yield takeLatest(PERFORM_GOOGLE_SEARCH, runGoogleSearchSaga);
  yield takeLatest(PERFORM_BING_SEARCH, runBingSearchSaga);
  yield takeLatest(PERFORM_BOTH_SEARCH, runBothSearchSaga);
}

export { runPerformSearchWatcher };
