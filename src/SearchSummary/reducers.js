import { combineReducers } from 'redux';

import { SET_SEARCH_FILTERS, SET_SEARCH_RESULTS, SET_IS_LOADING_SEARCH } from './actionTypes';

const filtersInitialState = {
  textBar: '',
  dropDown: 'google',
};

const searchResultsInitialState = { data: [] };

const isLoadingSearchInitialState = false;

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

const searchResultsReducer = (
  state = searchResultsInitialState,
  { type = '', searchResults = { ...searchResultsInitialState } } = {},
) => {
  switch (type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        data: [...searchResults],
      };

    default: {
      return state;
    }
  }
};

const isLoadingsearchReducer = (
  state = isLoadingSearchInitialState,
  { type = '', isLoadingSearch = isLoadingSearchInitialState } = {},
) => {
  switch (type) {
    case SET_IS_LOADING_SEARCH:
      return {
        ...state,
        isLoadingSearch,
      };

    default: {
      return state;
    }
  }
};

const searchSummaryReducer = combineReducers({
  filters: filtersReducers,
  searchResults: searchResultsReducer,
  isLoadingSearch: isLoadingsearchReducer,
});

export { searchSummaryReducer, filtersInitialState };
