import PropTypes from 'prop-types';

import styles from './TextBar.module.scss';

const TextBar = ({ placeholder }) => <input className={styles.textBar} placeholder={placeholder} />;

TextBar.propTypes = {
  placeholder: PropTypes.string,
};

TextBar.defaultProps = {
  placeholder: 'Search...',
};

export default TextBar;
