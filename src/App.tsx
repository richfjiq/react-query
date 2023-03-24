import { useQuery } from '@tanstack/react-query';
import { useEffect, useReducer, useState } from 'react';
import './App.css';

const getRandomNumberFromApi = async (): Promise<number> => {
  const res = await fetch(
    'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'
  );
  const numberString = await res.text();
  return +numberString;
};

const App = () => {
  const query = useQuery(['randomNumber'], getRandomNumberFromApi);

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