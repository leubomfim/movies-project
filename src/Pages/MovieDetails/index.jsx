import { useEffect, useState } from 'react';
import * as S from './styles';
import { useParams } from 'react-router-dom';
import { fetchMovieDetailApi } from '../../services/api';
import { Container } from '../../Components/Container';
import { useMoviesContext } from '../../Contexts/context';
import { Loading } from '../../Components/Loading';

export const MovieDetails = () => {
  const { setLink } = useMoviesContext();
  const [movieDetails, setMovieDetails] = useState({});
  const param = useParams();

  useEffect(() => {
    fetchMovieDetailApi(setMovieDetails, param.id);
    setLink(true);
  }, [param.id, setLink]);

  return (
    <>
      {Object.values(movieDetails).length === 0 && <Loading />}
      {Object.values(movieDetails).length > 0 && (
        <S.Section>
          <Container>
            <S.DetailsBox>
              <S.Post
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              />
              {Object.values(movieDetails).length > 0 && (
                <S.DetailsArea>
                  <S.MovieTitle>{movieDetails.title}</S.MovieTitle>
                  <S.TagLine>{movieDetails.tagline}</S.TagLine>
                  <S.Paragraph
                    style={{
                      marginBottom: '20px',
                      width: '800px',
                      textAlign: 'justify',
                    }}
                  >
                    <S.Span>Overview:</S.Span>{' '}
                    {movieDetails.overview === ''
                      ? 'No Overview.'
                      : movieDetails.overview}
                  </S.Paragraph>
                  <S.Columns>
                    <div className="columnStyle">
                      <S.Paragraph>
                        <S.Span>Budget:</S.Span>{' '}
                        {movieDetails.budget !== 0
                          ? `${movieDetails.budget.toLocaleString()} USD`
                          : 'No budget.'}
                      </S.Paragraph>
                      <S.Paragraph>
                        <S.Span>Votes:</S.Span> {movieDetails.vote_count}
                      </S.Paragraph>
                      <S.Paragraph>
                        <S.Span>Note:</S.Span> {movieDetails.vote_average}
                      </S.Paragraph>
                      <S.Paragraph>
                        <S.Span>genres:</S.Span>{' '}
                        {movieDetails.genres.length === 0 && 'No Genres.'}
                        {movieDetails.genres.length === 1 &&
                          movieDetails.genres.map((genre) => genre.name + '.')}
                        {movieDetails.genres.length === 2 &&
                          movieDetails.genres[0].name +
                            ', ' +
                            movieDetails.genres[1].name +
                            '.'}
                        {movieDetails.genres.length === 3 &&
                          movieDetails.genres[0].name +
                            ', ' +
                            movieDetails.genres[1].name +
                            ', ' +
                            movieDetails.genres[2].name +
                            '.'}
                        {movieDetails.genres.length === 4 &&
                          movieDetails.genres[0].name +
                            ', ' +
                            movieDetails.genres[1].name +
                            ', ' +
                            movieDetails.genres[2].name +
                            ', ' +
                            movieDetails.genres[3].name +
                            '.'}
                        {movieDetails.genres.length === 5 &&
                          movieDetails.genres[0].name +
                            ', ' +
                            movieDetails.genres[1].name +
                            ', ' +
                            movieDetails.genres[2].name +
                            ', ' +
                            movieDetails.genres[3].name +
                            ', ' +
                            movieDetails.genres[4].name +
                            '.'}
                      </S.Paragraph>
                      <S.Paragraph>
                        <S.Span>Status:</S.Span> {movieDetails.status}.
                      </S.Paragraph>
                      <S.Paragraph>
                        <S.Span>Revenue:</S.Span>{' '}
                        {movieDetails.revenue !== 0
                          ? `${movieDetails.revenue.toLocaleString()} USD`
                          : 'No Revenue.'}
                      </S.Paragraph>
                      <S.Paragraph>
                        <S.Span>Status:</S.Span> {movieDetails.status}.
                      </S.Paragraph>
                    </div>
                    <div className="columnStyle">
                      <S.Paragraph>
                        <S.Span>Popularity:</S.Span> {movieDetails.popularity}
                      </S.Paragraph>
                      <S.Paragraph>
                        <S.Span>Language:</S.Span>{' '}
                        {movieDetails.original_language}.
                      </S.Paragraph>
                      <S.Paragraph>
                        <S.Span>Release date:</S.Span>{' '}
                        {movieDetails.release_date}
                      </S.Paragraph>
                      <S.Paragraph>
                        <S.Span>Production country:</S.Span>{' '}
                        {movieDetails.production_countries[0].name}.
                      </S.Paragraph>
                      <S.Paragraph style={{ width: '350px' }}>
                        <S.Span>Production companies:</S.Span>{' '}
                        {movieDetails.production_companies.length === 0 &&
                          'No Companies.'}
                        {movieDetails.production_companies.length === 1 &&
                          movieDetails.production_companies.map(
                            (company) => company.name + '.',
                          )}
                        {movieDetails.production_companies.length === 2 &&
                          movieDetails.production_companies[0].name +
                            ', ' +
                            movieDetails.production_companies[1].name +
                            '.'}
                        {movieDetails.production_companies.length === 3 &&
                          movieDetails.production_companies[0].name +
                            ', ' +
                            movieDetails.production_companies[1].name +
                            ', ' +
                            movieDetails.production_companies[2].name +
                            '.'}
                        {movieDetails.production_companies.length === 4 &&
                          movieDetails.production_companies[0].name +
                            ', ' +
                            movieDetails.production_companies[1].name +
                            ', ' +
                            movieDetails.production_companies[2].name +
                            ', ' +
                            movieDetails.production_companies[3].name +
                            '.'}
                        {movieDetails.production_companies.length === 5 &&
                          movieDetails.production_companies[0].name +
                            ', ' +
                            movieDetails.production_companies[1].name +
                            ', ' +
                            movieDetails.production_companies[2].name +
                            ', ' +
                            movieDetails.production_companies[3].name +
                            ', ' +
                            movieDetails.genres[4].name +
                            '.'}
                      </S.Paragraph>
                      <S.Paragraph>
                        <S.Span>Home page:</S.Span>{' '}
                        {movieDetails.homepage === ' ' ? (
                          'No home page.'
                        ) : (
                          <a
                            href={movieDetails.homepage}
                            rel="noreferrer"
                            target="_blank"
                          >
                            Go to movie home page.
                          </a>
                        )}
                      </S.Paragraph>
                    </div>
                  </S.Columns>
                </S.DetailsArea>
              )}
            </S.DetailsBox>
          </Container>
        </S.Section>
      )}
    </>
  );
};
