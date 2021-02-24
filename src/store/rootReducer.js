import { combineReducers } from 'redux';

import { searchSummaryReducer } from '../SearchSummary/reducers';

const rootReducer = combineReducers({
  searchSummary: searchSummaryReducer,
});

export default rootReducer;
