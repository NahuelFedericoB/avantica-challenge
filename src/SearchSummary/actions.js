import { SET_SEARCH_FILTERS, PERFORM_SEARCH, SET_GOOGLE_SEARCH_RESULTS } from './actionTypes';

export const setSearchFilters = filters => ({
  type: SET_SEARCH_FILTERS,
  filters,
});

export const setGoogleSearchResults = searchResults => ({
  type: SET_GOOGLE_SEARCH_RESULTS,
  searchResults,
});

export const performSearch = () => ({
  type: PERFORM_SEARCH,
});
