import { useAction } from '../../../common';
import { performSearch } from '../../actions';

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
