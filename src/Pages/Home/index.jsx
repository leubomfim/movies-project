import { SwiperSlide } from 'swiper/react';
import { Container } from '../../Components/Container';
import { Header } from '../../Components/Header';
import { MenuSide } from '../../Components/MenuSide';
import { SwiperComponent } from '../../Components/SwiperComponent';
import * as S from './styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieApi, fetchSeriesApi } from '../../services/api';
import { useMoviesContext } from '../../Contexts/context';
import { Loading } from '../../Components/Loading';

export const Home = () => {
  const { setLink, movieAccount, logged } = useMoviesContext();
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    document.title = 'Home';
    localStorage.setItem('movieAccount', JSON.stringify(movieAccount));
    localStorage.setItem('movieLogged', JSON.stringify(logged));
  }, [movieAccount, logged]);

  useEffect(() => {
    fetchMovieApi(setMovies);
    fetchSeriesApi(setTvShows);
    setLink(false);
  }, [setLink]);
  const navigate = useNavigate();

  return (
    <>
      {movies.length === 0 && tvShows.length === 0 && <Loading />}
      {movies.length > 0 && tvShows.length > 0 && (
        <>
          <MenuSide />
          <Header link={false} />
          <S.Section>
            <Container>
              <S.SectionTitle>Movies you might like</S.SectionTitle>
              {movies.length === 0 && null}
              {movies.length > 0 && (
                <S.Movies>
                  <SwiperComponent>
                    {movies.map((el) => (
                      <SwiperSlide key={el.id} className="slide">
                        <div>
                          <S.Button
                            onClick={() => navigate(`/movies/${el.id}`)}
                          >
                            <S.PostBg></S.PostBg>
                            <div>
                              <S.Post
                                src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                                alt={`${el.title} post`}
                              />
                            </div>
                          </S.Button>
                        </div>
                      </SwiperSlide>
                    ))}
                  </SwiperComponent>
                </S.Movies>
              )}
            </Container>
          </S.Section>
          <S.Section>
            <Container>
              <S.SectionTitle>Series you might be interested in</S.SectionTitle>
              {tvShows.length === 0 && null}
              {tvShows.length > 0 && (
                <S.Movies>
                  <SwiperComponent>
                    {tvShows.map((el) => (
                      <SwiperSlide key={el.id} className="slide">
                        <S.Button onClick={() => navigate(`/series/${el.id}`)}>
                          <S.PostBg></S.PostBg>
                          <div>
                            <S.Post
                              src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                              alt={`${el.title} post`}
                            />
                          </div>
                        </S.Button>
                      </SwiperSlide>
                    ))}
                  </SwiperComponent>
                </S.Movies>
              )}
            </Container>
          </S.Section>
        </>
      )}
    </>
  );
};
