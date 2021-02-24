import { combineReducers } from 'redux';

import { SET_SEARCH_FILTERS } from './actionTypes';

const filtersInitialState = {
  textBar: '',
  dropDown: 'google',
};

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

const searchSummaryReducer = combineReducers({
  filters: filtersReducers,
});

export { searchSummaryReducer, filtersInitialState };
