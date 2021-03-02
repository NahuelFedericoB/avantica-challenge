import {
  SET_SEARCH_FILTERS,
  PERFORM_SEARCH,
  SET_SEARCH_RESULTS,
  SET_IS_LOADING_SEARCH,
} from './actionTypes';

export const setSearchFilters = filters => ({
  type: SET_SEARCH_FILTERS,
  filters,
});

export const setSearchResults = searchResults => ({
  type: SET_SEARCH_RESULTS,
  searchResults,
});

export const setIsLoadingSearch = isLoadingSearch => ({
  type: SET_IS_LOADING_SEARCH,
  isLoadingSearch,
});

export const performSearch = () => ({
  type: PERFORM_SEARCH,
});
