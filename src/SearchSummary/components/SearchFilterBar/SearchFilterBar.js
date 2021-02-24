import SearchButton from '../SearchButton';
import TextBar from '../TextBar';
import DropDown from '../DropDown';

import useSearchFilterBar from './hooks';
import styles from './SearchFilterBar.module.scss';

const SearchFilterBar = () => {
  const { handleFilterChange, filters } = useSearchFilterBar();

  return (
    <div className={styles.container}>
      <TextBar placeholder="Type something..." onChange={handleFilterChange('textBar')} />
      <DropDown onChange={handleFilterChange('dropDown')} activeValue={filters.dropDown} />
      <SearchButton>Search</SearchButton>
    </div>
  );
};

export default SearchFilterBar;
