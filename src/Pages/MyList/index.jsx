import { useEffect } from 'react';
import { Container } from '../../Components/Container/styles';
import { useMoviesContext } from '../../Contexts/context';
import * as SH from '../Home/styles';
import * as S from './styles';

export const MyList = () => {
  const { logged, navigate, setLink } = useMoviesContext();

  useEffect(() => {
    document.title = 'My List';
    setLink(true);
  }, [setLink]);
  return (
    <SH.Section>
      <Container className="container">
        <S.SectionTitle>Movies list:</S.SectionTitle>
        <S.MyListDisplay>
          {logged.moviesList.length === 0 && (
            <h3 style={{ color: '#c4c4c4', fontSize: '25px' }}>
              No movies in your list.
            </h3>
          )}
          {logged.moviesList.map((el) => (
            <S.Box key={el.id}>
              <S.Button onClick={() => navigate(`/movies/${el.id}`)}>
                <S.PostBg></S.PostBg>
                <div>
                  <S.Post
                    src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                    alt={`${el.title} post`}
                  />
                </div>
              </S.Button>
            </S.Box>
          ))}
        </S.MyListDisplay>
        <S.SectionTitle style={{ marginTop: '80px' }}>
          Series list:
        </S.SectionTitle>
        <S.MyListDisplay>
          {logged.seriesList.length === 0 && (
            <h3 style={{ color: '#c4c4c4', fontSize: '25px' }}>
              No series in your list.
            </h3>
          )}
          {logged.seriesList.map((el) => (
            <S.Box key={el.id}>
              <S.Button onClick={() => navigate(`/series/${el.id}`)}>
                <S.PostBg></S.PostBg>
                <div>
                  <S.Post
                    src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                    alt={`${el.title} post`}
                  />
                </div>
              </S.Button>
            </S.Box>
          ))}
        </S.MyListDisplay>
      </Container>
    </SH.Section>
  );
};
