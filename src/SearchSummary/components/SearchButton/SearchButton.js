import PropTypes from 'prop-types';

import useSearchButton from './hooks';
import styles from './SearchButton.module.scss';

const SearchButton = ({ children }) => {
  const { handleOnClick } = useSearchButton();

  return (
    <button className={styles.button} type="button" onClick={handleOnClick}>
      {children}
    </button>
  );
};

SearchButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchButton;
