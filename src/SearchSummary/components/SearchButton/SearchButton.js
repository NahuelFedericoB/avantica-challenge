import PropTypes from 'prop-types';

import styles from './SearchButton.module.scss';

const SearchButton = ({ children }) => {
  return (
    <button className={styles.button} type="button">
      {children}
    </button>
  );
};

SearchButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchButton;
