import useSearchResultList from './hooks';
import styles from './SearchResultList.module.scss';

const SearchResultList = () => {
  const { searchResults, isLoadingSearch } = useSearchResultList();

  const Loading = () => <div className={styles.loading}>Loading...</div>;

  const List = () => {
    return (
      <div className={styles.resultListContainer}>
        {searchResults.length > 0 &&
          searchResults.map(result => (
            <div key={`${result.title}__${result.displayLink}`} className={styles.resultBlock}>
              <div className={styles.displayLink}>{result.displayLink}</div>
              <div className={styles.resultLink}>
                <a href={result.linkToPage}>{result.title}</a>
              </div>
              <p className={styles.snippet}>{result.snippet}</p>
            </div>
          ))}
      </div>
    );
  };

  return <div>{isLoadingSearch ? <Loading /> : <List />}</div>;
};

export default SearchResultList;
