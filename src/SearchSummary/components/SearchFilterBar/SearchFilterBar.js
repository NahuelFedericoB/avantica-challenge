import SearchButton from '../SearchButton';
import TextBar from '../TextBar';
import DropDown from '../DropDown';

import styles from './SearchFilterBar.module.scss';

const SearchFilterBar = () => {
  return (
    <div className={styles.container}>
      <TextBar placeholder="Type something..." />
      <DropDown />
      <SearchButton>Search</SearchButton>
    </div>
  );
};

export default SearchFilterBar;
