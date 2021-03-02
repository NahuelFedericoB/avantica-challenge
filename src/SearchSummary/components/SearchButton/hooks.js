import { useSelector } from 'react-redux';

import { useAction } from '../../../common';
import { performGoogleSearch, performBingSearch, performBothSearch } from '../../state/actions';
import { getSummaryFilters } from '../../state/selectors';

const useSearchButton = () => {
  const { dropDown } = useSelector(getSummaryFilters);
  const runGoogleSearch = useAction(performGoogleSearch);
  const runBingSearch = useAction(performBingSearch);
  const runBothSearch = useAction(performBothSearch);

  const handleOnClick = () => {
    if (dropDown === 'google') {
      runGoogleSearch();

      return;
    }

    if (dropDown === 'bing') {
      runBingSearch();

      return;
    }

    runBothSearch();
  };

  return {
    handleOnClick,
  };
};

export default useSearchButton;
