import { SET_SEARCH_FILTERS, SET_IS_LOADING_SEARCH, SET_SEARCH_RESULTS } from './actionTypes';
import {
  searchSummaryReducer,
  filtersInitialState,
  isLoadingSearchInitialState,
  searchResultsInitialState,
} from './reducers';

const reducerInitialState = {
  filters: filtersInitialState,
  searchResults: searchResultsInitialState,
  isLoadingSearch: isLoadingSearchInitialState,
};

describe('Summary Reducer', () => {
  it('should initialize correctly', () => {
    const state = searchSummaryReducer();

    expect(state).toEqual(reducerInitialState);
  });

  describe('when NO action is passed in', () => {
    it('should return the default state', () => {
      const state = searchSummaryReducer();

      expect(state).toEqual(reducerInitialState);
    });
  });

  describe('when the action passed is `SET_SEARCH_FILTERS`', () => {
    describe('and the payload is missing', () => {
      it('should set the current filters with the default info', () => {
        const state = searchSummaryReducer(undefined, { type: SET_SEARCH_FILTERS });

        expect(state).toEqual(expect.objectContaining({ filters: filtersInitialState }));
      });
    });

    it('should update the state with the current filter info', () => {
      const filters = {
        ...filtersInitialState,
        dropDown: 'both',
      };

      const state = searchSummaryReducer(undefined, {
        type: SET_SEARCH_FILTERS,
        filters,
      });

      expect(state).toEqual(expect.objectContaining({ filters }));
    });
  });

  describe('when the action passed is `SET_IS_LOADING_SEARCH`', () => {
    describe('and the payload is missing', () => {
      it('should set the current isLoadingSearch with the default info', () => {
        const state = searchSummaryReducer(undefined, { type: SET_IS_LOADING_SEARCH });

        expect(state).toEqual(
          expect.objectContaining({ isLoadingSearch: { isLoadingSearch: false } }),
        );
      });
    });

    it('should update the state with the current filter info', () => {
      const isLoadingSearch = true;

      const state = searchSummaryReducer(undefined, {
        type: SET_IS_LOADING_SEARCH,
        isLoadingSearch,
      });

      expect(state).toEqual(expect.objectContaining({ isLoadingSearch: { isLoadingSearch } }));
    });
  });

  describe('when the action passed is `SET_SEARCH_RESULTS`', () => {
    it('should update the state with the current filter info', () => {
      const searchResults = [{ title: 'Title', link: 'www.link.com' }];

      const state = searchSummaryReducer(undefined, {
        type: SET_SEARCH_RESULTS,
        searchResults,
      });

      expect(state).toEqual(expect.objectContaining({ searchResults: { data: searchResults } }));
    });
  });
});
