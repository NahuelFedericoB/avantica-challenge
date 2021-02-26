import SearchFilterBar from './components/SearchFilterBar';
import SearchResultList from './components/SearchResultList';

const SearchSummary = () => {
  return (
    <div>
      <SearchFilterBar />
      <div>
        <SearchResultList />
      </div>
    </div>
  );
};

export default SearchSummary;
