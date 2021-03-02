import { Provider } from 'react-redux';

import SearchSummary from '../SearchSummary';
import createStore from '../redux/store';

const store = createStore();

const App = () => (
  <div>
    <Provider store={store}>
      <SearchSummary />
    </Provider>
  </div>
);

export default App;
