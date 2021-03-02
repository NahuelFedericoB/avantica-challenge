import { SET_SEARCH_FILTERS, SET_IS_LOADING_SEARCH, SET_SEARCH_RESULTS } from './actionTypes';
import { searchSummaryReducer, searchSummaryReducerInitialState } from './reducers';

describe('Summary Reducer', () => {
  it('should initialize correctly', () => {
    const state = searchSummaryReducer();

    expect(state).toEqual(searchSummaryReducerInitialState);
  });

  describe('when NO action is passed in', () => {
    it('should return the default state', () => {
      const state = searchSummaryReducer();

      expect(state).toEqual(searchSummaryReducerInitialState);
    });
  });

  describe('when the action passed is `SET_SEARCH_FILTERS`', () => {
    describe('and the payload is missing', () => {
      it('should set the current filters with the default info', () => {
        const state = searchSummaryReducer(undefined, { type: SET_SEARCH_FILTERS });

        expect(state).toEqual(
          expect.objectContaining({ filters: searchSummaryReducerInitialState.filters }),
        );
      });
    });

    it('should update the state with the current filter info', () => {
      const filters = {
        ...searchSummaryReducerInitialState.filter,
        dropDown: 'both',
      };

      const state = searchSummaryReducer(undefined, {
        type: SET_SEARCH_FILTERS,
        payload: { filters },
      });

      expect(state).toEqual(expect.objectContaining({ filters }));
    });
  });

  describe('when the action passed is `SET_IS_LOADING_SEARCH`', () => {
    describe('and the payload is missing', () => {
      it('should set the current isLoadingSearch with the default info', () => {
        const state = searchSummaryReducer(undefined, { type: SET_IS_LOADING_SEARCH });

        expect(state).toEqual(
          expect.objectContaining({
            isLoadingSearch: searchSummaryReducerInitialState.isLoadingSearch,
          }),
        );
      });
    });

    it('should update the state with the current filter info', () => {
      const state = searchSummaryReducer(undefined, {
        type: SET_IS_LOADING_SEARCH,
        payload: { isLoadingSearch: true },
      });

      expect(state).toEqual(expect.objectContaining({ isLoadingSearch: true }));
    });
  });

  describe('when the action passed is `SET_SEARCH_RESULTS`', () => {
    it('should update the state with the current filter info', () => {
      const searchResults = [{ title: 'Title', link: 'www.link.com' }];

      const state = searchSummaryReducer(undefined, {
        type: SET_SEARCH_RESULTS,
        payload: { searchResults },
      });

      expect(state).toEqual(expect.objectContaining({ searchResults: { data: searchResults } }));
    });
  });
});
