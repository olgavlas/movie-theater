import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Page from '../../components/Page';
import get from '../../request/get';

const MovieWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const PosterImage = styled.div<{ image: string }>`
  width: 320px;
  height: 448px;
  flex-shrink: 0;
  border-radius: 3px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  margin-right: 32px;
`;

const Details = styled.div`
  flex: 1;
  padding: 24px 0 0 0;
`;

const Title = styled.h1`
  font-size: 28px;
  line-height: 32px;
  font-weight: 600;
  color: white;
`;

const Description = styled.p`
  white-space: pre-line;
  font-size: 18px;
  line-height: 24px;
  color: white;
  margin-top: 16px;
`;

const LowDescription = styled(Description)`
  opacity: 0.7;
`;

const BuyButton = styled.button`
  width: 164px;
  height: 40px;
  border-radius: 6px;
  background-color: #ffc145;
  font-size: 16px;
  font-weight: 500;
  padding: 0 16px;
  margin-top: 32px;
`;

export default () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (id) {
      setLoading(true);
      get(`/movie/${id}`, data => {
        setLoading(false);
        setMovie(data);
      })
    }
  }, [id]);

  if (!id) {
    return null;
  }

  return (
    <Page title={!id ? 'Loading...' : `Movie ${id}`}>
      {loading && 'Loading...'}

      {movie && (
        <MovieWrapper>
          <PosterImage image={movie.poster} />
          <Details>
            <Title>{movie.title}</Title>
            <Description>{movie.description}</Description>
            <LowDescription>{movie.length} • {movie.genre}</LowDescription>
            <BuyButton>Купить</BuyButton>
          </Details>
        </MovieWrapper>
      )}
    </Page>
  )
};
