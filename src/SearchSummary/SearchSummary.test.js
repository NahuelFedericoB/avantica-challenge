import { Provider } from 'react-redux';
import { fireEvent, render, waitFor } from '@testing-library/react';

import createStore from '../store';

import { getSearchFromGoogle, getSearchFromBing } from './services';
import SearchSummary from './SearchSummary';

jest.mock('./services');

function mockGetSearchFromGoogle() {
  getSearchFromGoogle.mockResolvedValueOnce([
    {
      title: 'I am the banana result',
      linkToPage: 'https://www.banana.com/',
      displayLink: 'www.banana.com',
    },
  ]);
}

function mockGetSearchFromBing() {
  getSearchFromBing.mockResolvedValueOnce([
    {
      title: 'I am the React result',
      linkToPage: 'https://www.react.com/',
      displayLink: 'www.react.com',
    },
  ]);
}

const store = createStore();

const renderWithStore = () =>
  render(
    <Provider store={store}>
      <SearchSummary />
    </Provider>,
  );

describe('SearchSummary', () => {
  it('should render correctly', () => {
    const { asFragment } = renderWithStore();

    expect(asFragment()).toMatchSnapshot();
  });

  describe('when the user perform a search', () => {
    describe('and the search engine is `Google`', () => {
      it('should show the results acording with it', async () => {
        mockGetSearchFromGoogle();
        const { getByRole, getByText, queryByText } = renderWithStore();
        const textBox = getByRole('textbox');
        const searchButton = getByText('Search');

        fireEvent.change(textBox, { target: { value: 'banana' } });
        fireEvent.click(searchButton);

        await waitFor(() => expect(queryByText('I am the banana result')).toBeInTheDocument);
      });
    });

    describe('and the search engine is `Bing`', () => {
      it('should show the results acording with it', async () => {
        mockGetSearchFromBing();
        const { getByRole, getByText, queryByText } = renderWithStore();
        const textBox = getByRole('textbox');
        const dropDown = getByRole('combobox');
        const searchButton = getByText('Search');

        fireEvent.change(textBox, { target: { value: 'React' } });
        fireEvent.change(dropDown, { target: { value: 'bing' } });
        fireEvent.click(searchButton);

        await waitFor(() => expect(queryByText('I am the React result')).toBeInTheDocument);
      });
    });

    describe('and the search engine is `Both`', () => {
      it('should show the results acording with it', async () => {
        mockGetSearchFromBing();
        mockGetSearchFromGoogle();
        const { getByRole, getByText, queryByText } = renderWithStore();
        const textBox = getByRole('textbox');
        const dropDown = getByRole('combobox');
        const searchButton = getByText('Search');

        fireEvent.change(textBox, { target: { value: 'React' } });
        fireEvent.change(dropDown, { target: { value: 'both' } });
        fireEvent.click(searchButton);

        await waitFor(() => expect(queryByText('I am the banana result')).toBeInTheDocument);
        await waitFor(() => expect(queryByText('I am the React result')).toBeInTheDocument);
      });
    });
  });
});
