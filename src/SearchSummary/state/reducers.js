import { SET_SEARCH_FILTERS, SET_SEARCH_RESULTS, SET_IS_LOADING_SEARCH } from './actionTypes';

const searchSummaryReducerInitialState = {
  filters: {
    textBar: '',
    dropDown: 'google',
  },
  searchResults: {
    data: [],
  },
  isLoadingSearch: false,
};

const searchSummaryReducer = (
  state = searchSummaryReducerInitialState,
  { type = '', payload = { ...searchSummaryReducerInitialState } } = {},
) => {
  switch (type) {
    case SET_SEARCH_FILTERS:
      return {
        ...state,
        filters: { ...payload.filters },
      };

    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: { data: [...payload.searchResults] },
      };

    case SET_IS_LOADING_SEARCH:
      return {
        ...state,
        isLoadingSearch: payload.isLoadingSearch,
      };

    default: {
      return state;
    }
  }
};

export { searchSummaryReducerInitialState, searchSummaryReducer };
