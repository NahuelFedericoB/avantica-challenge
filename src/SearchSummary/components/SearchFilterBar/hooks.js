/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import debounce from 'lodash/debounce';

import { useAction } from '../../../common';
import { setSearchFilters } from '../../state/actions';
import { getSummaryFilters } from '../../state/selectors';
import { oneSecond } from '../../../constants';

const useSearchFilterBar = () => {
  const storedFilters = useSelector(getSummaryFilters);
  const setStoredFilters = useAction(setSearchFilters);
  const debouncedFilterChange = useCallback(debounce(setStoredFilters, oneSecond), []);
  const [isInputFilter, setIsInputFilter] = useState(false);
  const [filters, setFilters] = useState({ ...storedFilters });

  useEffect(() => {
    if (isInputFilter) {
      debouncedFilterChange(filters);
      setIsInputFilter(false);
    } else {
      setStoredFilters(filters);
    }
  }, [filters]);

  const handleFilterChange = filterName => ({ target: { type, value } }) => {
    const filter = { [filterName]: value };

    if (type === 'text') {
      setIsInputFilter(true);
    }

    setFilters({
      ...filters,
      ...filter,
    });
  };

  return {
    filters,
    handleFilterChange,
  };
};

export default useSearchFilterBar;
