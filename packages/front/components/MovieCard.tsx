import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

interface MovieProps {
  id: string,
  title: string,
  poster: string,
  genre: string,
};

const MovieWrapper = styled.div`
  height: 448px;
`;

const PosterImage = styled.img`
  width: 228px;
  height: 360px;
  border-radius: 3px;
`;

const MovieTitle = styled.h3`
  display: block;
  font-size: 16px;
  line-height: 20px;
  color: white;
  font-weight: 500;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const Genre = styled.span`
  display: block;
  line-height: 16px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
`;

export default ({ id, title, poster, genre }: MovieProps) => (
  <Link href={`/movie/${id}`}>
    <MovieWrapper>
      <PosterImage src={poster} />
      <MovieTitle>{title}</MovieTitle>
      <Genre>{genre}</Genre>
    </MovieWrapper>
  </Link>
);
