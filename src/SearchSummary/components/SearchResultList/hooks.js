import { useSelector } from 'react-redux';

import { getSearchResults, getIsLoadingSearch } from '../../selectors';

const useSearchFilterBar = () => {
  const searchResults = useSelector(getSearchResults);
  const { isLoadingSearch } = useSelector(getIsLoadingSearch);

  return {
    searchResults,
    isLoadingSearch,
  };
};

export default useSearchFilterBar;
