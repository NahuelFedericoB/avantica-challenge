import { useSelector } from 'react-redux';

import { getGoogleSearchResults } from '../../selectors';

const useSearchFilterBar = () => {
  const results = useSelector(getGoogleSearchResults);

  return {
    results,
  };
};

export default useSearchFilterBar;
