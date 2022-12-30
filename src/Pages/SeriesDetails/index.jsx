import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../Components/Container';
import { Loading } from '../../Components/Loading';
import { useMoviesContext } from '../../Contexts/context';
import { fetchSeriesDetailApi } from '../../services/api';
import * as S from '../MovieDetails/styles';
import * as Sp from '../SelectPhoto/styles';

export const SeriesDetails = () => {
  const { setLink, logged, movieAccount } = useMoviesContext();
  const [seriesDetails, setSeriesDetails] = useState({});
  const [resetPage, setResetPage] = useState(false);
  const [added, setAdded] = useState(false);
  const param = useParams();
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    let timeout;
    if (added) {
      timeout = setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
    }

    if (counter === 0) {
      clearTimeout(timeout);
      setAdded(false);
      setCounter(3);
    }
  }, [added, counter]);

  useEffect(() => {
    document.title = 'Movie Details';
    localStorage.setItem('movieAccount', JSON.stringify(movieAccount));
    localStorage.setItem('movieLogged', JSON.stringify(logged));
  }, [logged, movieAccount, resetPage]);

  useEffect(() => {
    fetchSeriesDetailApi(setSeriesDetails, param.id);
    setLink(true);
  }, [param.id, setLink]);

  const handleAddToList = () => {
    if (logged.seriesList.length === 0) {
      const filter = movieAccount.filter((el) => {
        return el.email === logged.email;
      });
      logged.seriesList.push(seriesDetails);
      filter[0].seriesList = logged.seriesList;
      setResetPage(!resetPage);
      setAdded(true);
    } else {
      const listFiltered = logged.seriesList.filter((el) => {
        return el.id === seriesDetails.id;
      });
      if (listFiltered.length > 0) {
        if (listFiltered[0].id === seriesDetails.id) {
          console.log('Exist');
        } else {
          const filter = movieAccount.filter((el) => {
            return el.email === logged.email;
          });
          logged.seriesList.push(seriesDetails);
          filter[0].seriesList = logged.seriesList;
          setResetPage(!resetPage);
          setAdded(true);
        }
      } else {
        const filter = movieAccount.filter((el) => {
          return el.email === logged.email;
        });
        logged.seriesList.push(seriesDetails);
        filter[0].seriesList = logged.seriesList;
        setResetPage(!resetPage);
        setAdded(true);
      }
    }
  };

  return (
    <>
      {Object.values(seriesDetails).length === 0 && <Loading />}
      {Object.values(seriesDetails).length > 0 && (
        <S.Section>
          <Sp.ChangedNoticeBox changed={added}>
            <Sp.ChangedTitle>Added to list!</Sp.ChangedTitle>
          </Sp.ChangedNoticeBox>
          <Container>
            <S.DetailsBox>
              <S.Post
                src={`https://image.tmdb.org/t/p/w500${seriesDetails.poster_path}`}
              />
              {Object.values(seriesDetails).length > 0 && (
                <S.DetailsArea>
                  <S.MovieTitle>{seriesDetails.name}</S.MovieTitle>
                  <S.TagLine>{seriesDetails.tagline}</S.TagLine>
                  <S.Paragraph
                    style={{
                      marginBottom: '20px',
                      width: '800px',
                      textAlign: 'justify',
                    }}
                  >
                    <S.Span>Overview:</S.Span>{' '}
                    {seriesDetails.overview === ''
                      ? 'No Overview.'
                      : seriesDetails.overview}
                  </S.Paragraph>
                  <S.Columns>
                    <div className="columnStyle">
                      <S.Paragraph>
                        <S.Span>Votes:</S.Span> {seriesDetails.vote_count}
                      </S.Paragraph>
                      <S.Paragraph>
                        <S.Span>Note:</S.Span> {seriesDetails.vote_average}
                      </S.Paragraph>
                      <S.Paragraph style={{ width: '350px' }}>
                        <S.Span>genres:</S.Span>{' '}
                        {seriesDetails.genres.length === 0 && 'No Genres.'}
                        {seriesDetails.genres.length === 1 &&
                          seriesDetails.genres.map((genre) => genre.name + '.')}
                        {seriesDetails.genres.length === 2 &&
                          seriesDetails.genres[0].name +
                            ', ' +
                            seriesDetails.genres[1].name +
                            '.'}
                        {seriesDetails.genres.length === 3 &&
                          seriesDetails.genres[0].name +
                            ', ' +
                            seriesDetails.genres[1].name +
                            ', ' +
                            seriesDetails.genres[2].name +
                            '.'}
                        {seriesDetails.genres.length === 4 &&
                          seriesDetails.genres[0].name +
                            ', ' +
                            seriesDetails.genres[1].name +
                            ', ' +
                            seriesDetails.genres[2].name +
                            ', ' +
                            seriesDetails.genres[3].name +
                            '.'}
                        {seriesDetails.genres.length === 5 &&
                          seriesDetails.genres[0].name +
                            ', ' +
                            seriesDetails.genres[1].name +
                            ', ' +
                            seriesDetails.genres[2].name +
                            ', ' +
                            seriesDetails.genres[3].name +
                            ', ' +
                            seriesDetails.genres[4].name +
                            '.'}
                      </S.Paragraph>
                      <S.Paragraph>
                        <S.Span>Status:</S.Span> {seriesDetails.status}.
                      </S.Paragraph>
                      <S.Paragraph>
                        <S.Span>Seasons:</S.Span>{' '}
                        {seriesDetails.number_of_seasons}.
                      </S.Paragraph>
                      <S.Paragraph>
                        <S.Span>Episodes:</S.Span>{' '}
                        {seriesDetails.number_of_episodes}.
                      </S.Paragraph>
                      <S.Paragraph style={{ width: '350px' }}>
                        <S.Span>Networks:</S.Span>{' '}
                        {seriesDetails.networks.length === 0 && 'No networks.'}
                        {seriesDetails.networks.length === 1 &&
                          seriesDetails.networks.map(
                            (network) => network.name + '.',
                          )}
                        {seriesDetails.networks.length === 2 &&
                          seriesDetails.networks[0].name +
                            ', ' +
                            seriesDetails.networks[1].name +
                            '.'}
                        {seriesDetails.networks.length === 3 &&
                          seriesDetails.networks[0].name +
                            ', ' +
                            seriesDetails.networks[1].name +
                            ', ' +
                            seriesDetails.networks[2].name +
                            '.'}
                        {seriesDetails.networks.length === 4 &&
                          seriesDetails.networks[0].name +
                            ', ' +
                            seriesDetails.networks[1].name +
                            ', ' +
                            seriesDetails.networks[2].name +
                            ', ' +
                            seriesDetails.networks[3].name +
                            '.'}
                        {seriesDetails.networks.length === 5 &&
                          seriesDetails.networks[0].name +
                            ', ' +
                            seriesDetails.networks[1].name +
                            ', ' +
                            seriesDetails.networks[2].name +
                            ', ' +
                            seriesDetails.networks[3].name +
                            ', ' +
                            seriesDetails.networks[4].name +
                            '.'}
                      </S.Paragraph>
                      <S.Paragraph style={{ width: '350px' }}>
                        <S.Span>Created by:</S.Span>{' '}
                        {seriesDetails.created_by.length === 0 &&
                          'Not informed the creators.'}
                        {seriesDetails.created_by.length === 1 &&
                          seriesDetails.created_by.map(
                            (created) => created.name + '.',
                          )}
                        {seriesDetails.created_by.length === 2 &&
                          seriesDetails.created_by[0].name +
                            ', ' +
                            seriesDetails.created_by[1].name +
                            '.'}
                        {seriesDetails.created_by.length === 3 &&
                          seriesDetails.created_by[0].name +
                            ', ' +
                            seriesDetails.created_by[1].name +
                            ', ' +
                            seriesDetails.created_by[2].name +
                            '.'}
                        {seriesDetails.created_by.length === 4 &&
                          seriesDetails.created_by[0].name +
                            ', ' +
                            seriesDetails.created_by[1].name +
                            ', ' +
                            seriesDetails.created_by[2].name +
                            ', ' +
                            seriesDetails.created_by[3].name +
                            '.'}
                        {seriesDetails.created_by.length === 5 &&
                          seriesDetails.created_by[0].name +
                            ', ' +
                            seriesDetails.created_by[1].name +
                            ', ' +
                            seriesDetails.created_by[2].name +
                            ', ' +
                            seriesDetails.created_by[3].name +
                            ', ' +
                            seriesDetails.created_by[4].name +
                            '.'}
                      </S.Paragraph>
                    </div>
                    <div className="columnStyle">
                      <S.Paragraph>
                        <S.Span>Popularity:</S.Span> {seriesDetails.popularity}
                      </S.Paragraph>
                      <S.Paragraph>
                        <S.Span>Language:</S.Span>{' '}
                        {seriesDetails.original_language}.
                      </S.Paragraph>
                      <S.Paragraph>
                        <S.Span>Release date:</S.Span>{' '}
                        {seriesDetails.last_air_date}
                      </S.Paragraph>
                      <S.Paragraph>
                        <S.Span>Production country:</S.Span>{' '}
                        {seriesDetails.production_countries.length === 0
                          ? 'Not informed country production'
                          : seriesDetails.production_countries[0].name}
                        .
                      </S.Paragraph>
                      <S.Paragraph style={{ width: '350px' }}>
                        <S.Span>Production companies:</S.Span>{' '}
                        {seriesDetails.production_companies.length === 0 &&
                          'No Companies.'}
                        {seriesDetails.production_companies.length === 1 &&
                          seriesDetails.production_companies.map(
                            (company) => company.name + '.',
                          )}
                        {seriesDetails.production_companies.length === 2 &&
                          seriesDetails.production_companies[0].name +
                            ', ' +
                            seriesDetails.production_companies[1].name +
                            '.'}
                        {seriesDetails.production_companies.length === 3 &&
                          seriesDetails.production_companies[0].name +
                            ', ' +
                            seriesDetails.production_companies[1].name +
                            ', ' +
                            seriesDetails.production_companies[2].name +
                            '.'}
                        {seriesDetails.production_companies.length === 4 &&
                          seriesDetails.production_companies[0].name +
                            ', ' +
                            seriesDetails.production_companies[1].name +
                            ', ' +
                            seriesDetails.production_companies[2].name +
                            ', ' +
                            seriesDetails.production_companies[3].name +
                            '.'}
                        {seriesDetails.production_companies.length === 5 &&
                          seriesDetails.production_companies[0].name +
                            ', ' +
                            seriesDetails.production_companies[1].name +
                            ', ' +
                            seriesDetails.production_companies[2].name +
                            ', ' +
                            seriesDetails.production_companies[3].name +
                            ', ' +
                            seriesDetails.genres[4].name +
                            '.'}
                      </S.Paragraph>
                      <S.Paragraph>
                        <S.Span>Home page:</S.Span>{' '}
                        {seriesDetails.homepage === '' ||
                        seriesDetails.homepage === ' ' ? (
                          'No home page.'
                        ) : (
                          <a
                            href={seriesDetails.homepage}
                            rel="noreferrer"
                            target="_blank"
                          >
                            Go to movie home page.
                          </a>
                        )}
                      </S.Paragraph>
                    </div>
                  </S.Columns>
                  {Object.values(logged).length > 0 ? (
                    <S.Button onClick={() => handleAddToList()}>
                      Add to list
                    </S.Button>
                  ) : null}
                </S.DetailsArea>
              )}
            </S.DetailsBox>
          </Container>
        </S.Section>
      )}
    </>
  );
};
