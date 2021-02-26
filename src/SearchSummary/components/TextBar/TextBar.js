import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import styles from './TextBar.module.scss';

const TextBar = ({ placeholder, onChange, value }) => (
  <input className={styles.textBar} placeholder={placeholder} onChange={onChange} value={value} />
);

TextBar.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

TextBar.defaultProps = {
  placeholder: 'Search...',
  onChange: noop,
  value: '',
};

export default TextBar;
