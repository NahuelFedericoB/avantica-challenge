import useSearchResultList from './hooks';
import styles from './SearchResultList.module.scss';

const SearchResultList = () => {
  const { results } = useSearchResultList();

  return (
    <div className={styles.resultListContainer}>
      {results.length > 0 &&
        results.map(result => (
          <div key={result.title} className={styles.resultBlock}>
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

export default SearchResultList;
