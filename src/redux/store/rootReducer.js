import { combineReducers } from 'redux';

import { searchSummaryReducer } from '../../SearchSummary/state/reducers';

const rootReducer = combineReducers({
  searchSummary: searchSummaryReducer,
});

export default rootReducer;
