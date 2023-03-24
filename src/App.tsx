import './App.css';
import { useRandom } from './hooks/useRandom';

const App = () => {
  const query = useRandom();

  return (
    <div className="App App-header">
      {query.isFetching ? (
        <h2>Loading...</h2>
      ) : (
        <h2>Random number: {query.data}</h2>
      )}
      {!query.isLoading && query.isError && <h3>{`${query.error}`}</h3>}
      <button onClick={() => query.refetch()} disabled={query.isFetching}>
        {query.isFetching ? '...' : 'New number'}
      </button>
    </div>
  );
};

export default App;
