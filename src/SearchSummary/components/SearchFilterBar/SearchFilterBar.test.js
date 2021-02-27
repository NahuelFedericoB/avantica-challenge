import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';

import createStore from '../../../store';

import SearchFilterBar from './SearchFilterBar';

const store = createStore();

const renderWithStore = () =>
  render(
    <Provider store={store}>
      <SearchFilterBar />
    </Provider>,
  );

describe('SearchFilterBar', () => {
  it('should render correctly', () => {
    const { asFragment } = renderWithStore();

    expect(asFragment()).toMatchSnapshot();
  });

  describe('when the user changes a filter', () => {
    describe('and the filter is the `dopdown`', () => {
      it('should change the value of the dopdown', () => {
        const { getByRole } = renderWithStore();
        const dropdown = getByRole('combobox');

        expect(dropdown.value).toEqual('google');

        fireEvent.change(dropdown, { target: { value: 'bing' } });

        expect(dropdown.value).toEqual('bing');
      });
    });

    describe('and the filter is the `textBar`', () => {
      it('should change the value of the text input', () => {
        const { getByRole } = renderWithStore();
        const textBox = getByRole('textbox');

        expect(textBox.value).toEqual('');

        fireEvent.change(textBox, { target: { value: 'banana' } });

        expect(textBox.value).toEqual('banana');
      });
    });
  });
});
