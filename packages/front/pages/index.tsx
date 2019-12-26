import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Page from '../components/Page';
import MovieCard from '../components/MovieCard';
import get from '../request/get';

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 228px);
  grid-gap: 32px;
  margin: 0 auto;
  justify-content: center;
`;

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    get('/movies', data => {
      setLoading(false);
      setMovies(data);
    }, err => {
      setLoading(false);
      setError(err);
    });
  }, []);

  return (
    <Page title="Movies">
      {loading && "Loading"}
      
      <MoviesGrid color="red">
        {movies.map(m => (
          <MovieCard key={m.id} {...m} />
        ))}
      </MoviesGrid>
    </Page>
  );
};

export default Home;
