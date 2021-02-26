import { combineReducers } from 'redux';

import { SET_SEARCH_FILTERS, SET_GOOGLE_SEARCH_RESULTS } from './actionTypes';

const filtersInitialState = {
  textBar: '',
  dropDown: 'google',
};

const googleSearchResultsInitialState = [];

const filtersReducers = (
  state = filtersInitialState,
  { type = '', filters = { ...filtersInitialState } } = {},
) => {
  switch (type) {
    case SET_SEARCH_FILTERS:
      return {
        ...state,
        ...filters,
      };

    default: {
      return state;
    }
  }
};

const googleSearchResultsReducer = (
  state = googleSearchResultsInitialState,
  { type = '', searchResults = [...googleSearchResultsInitialState] } = {},
) => {
  switch (type) {
    case SET_GOOGLE_SEARCH_RESULTS:
      return [...state, ...searchResults];

    default: {
      return state;
    }
  }
};

const searchSummaryReducer = combineReducers({
  filters: filtersReducers,
  googleSearchResults: googleSearchResultsReducer,
});

export { searchSummaryReducer, filtersInitialState };
