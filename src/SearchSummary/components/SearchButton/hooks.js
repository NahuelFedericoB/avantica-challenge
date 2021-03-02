import { useAction } from '../../../common';
import { performSearch } from '../../state/actions';

const useSearchButton = () => {
  const runPerformSearch = useAction(performSearch);

  const handleOnClick = () => {
    runPerformSearch();
  };

  return {
    handleOnClick,
  };
};

export default useSearchButton;
