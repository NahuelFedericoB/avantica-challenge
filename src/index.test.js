import ReactDOM from 'react-dom';

import App from './App';

jest.mock('react-dom');

describe('Application entry point', () => {
  it('should render correctly', () => {
    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);

    /* eslint-disable-next-line */
    require('./index');

    expect(ReactDOM.render).toHaveBeenCalledWith(<App />, root);
  });
});
