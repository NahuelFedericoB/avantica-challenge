import {
  SET_SEARCH_FILTERS,
  SET_SEARCH_RESULTS,
  SET_IS_LOADING_SEARCH,
  PERFORM_GOOGLE_SEARCH,
  PERFORM_BING_SEARCH,
  PERFORM_BOTH_SEARCH,
} from './actionTypes';

export const setSearchFilters = filters => ({
  type: SET_SEARCH_FILTERS,
  payload: { filters },
});

export const setSearchResults = searchResults => ({
  type: SET_SEARCH_RESULTS,
  payload: { searchResults },
});

export const setIsLoadingSearch = isLoadingSearch => ({
  type: SET_IS_LOADING_SEARCH,
  payload: { isLoadingSearch },
});

export const performGoogleSearch = () => ({
  type: PERFORM_GOOGLE_SEARCH,
});

export const performBingSearch = () => ({
  type: PERFORM_BING_SEARCH,
});

export const performBothSearch = () => ({
  type: PERFORM_BOTH_SEARCH,
});
