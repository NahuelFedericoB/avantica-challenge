import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import styles from './TextBar.module.scss';

const TextBar = ({ placeholder, onChange }) => (
  <input className={styles.textBar} placeholder={placeholder} onChange={onChange} />
);

TextBar.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

TextBar.defaultProps = {
  placeholder: 'Search...',
  onChange: noop,
};

export default TextBar;
