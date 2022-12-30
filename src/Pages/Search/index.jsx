import { useEffect, useState } from 'react';
import { Container } from '../../Components/Container';
import { useMoviesContext } from '../../Contexts/context';
import { Section } from '../Home/styles';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import * as S from './styles';
import { fetchSearchApi } from '../../services/api';

export const Search = () => {
  const { navigate, setLink } = useMoviesContext();
  const [searchValue, setSearchValue] = useState('');
  const [series, setSeries] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    document.title = 'Search';
    setLink(true);
  }, [setLink]);

  return (
    <Section>
      <Container>
        <form style={{ marginBottom: '80px' }}>
          <S.FormControl>
            <S.SearchInput
              value={searchValue}
              onChange={(e) => {
                fetchSearchApi(setSeries, setMovies, searchValue);
                setSearchValue(e.target.value);
              }}
              type="text"
              placeholder="What are you looking for?"
              aria-label="Search input"
            />
            <S.IconsPosition search={true}>
              <AiOutlineSearch />
            </S.IconsPosition>
            {searchValue !== '' && (
              <S.IconsPosition
                onClick={() => {
                  setSeries([]);
                  setMovies([]);
                  setSearchValue('');
                }}
                search={false}
              >
                <AiOutlineClose />
              </S.IconsPosition>
            )}
          </S.FormControl>
        </form>
        {searchValue === '' ? null : (
          <S.MyListDisplay>
            {movies.length > 0
              ? movies.map((el) => (
                  <S.Box key={el.id}>
                    <S.Button onClick={() => navigate(`/movies/${el.id}`)}>
                      <S.PostBg></S.PostBg>
                      {el.poster_path !== null && (
                        <div>
                          <S.Post
                            src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                            alt={`${el.title} post`}
                          />
                        </div>
                      )}
                      {el.poster_path === null && (
                        <S.PosterBox>
                          <S.NoPoster>No Poster!</S.NoPoster>
                        </S.PosterBox>
                      )}
                    </S.Button>
                  </S.Box>
                ))
              : null}
            {series.length > 0
              ? series.map((el) => (
                  <div key={el.id}>
                    <S.Button onClick={() => navigate(`/movies/${el.id}`)}>
                      <S.PostBg></S.PostBg>

                      {el.poster_path !== null && (
                        <div>
                          <S.Post
                            src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                            alt={`${el.title} post`}
                          />
                        </div>
                      )}
                      {el.poster_path === null && (
                        <S.PosterBox>
                          <S.NoPoster>No Poster!</S.NoPoster>
                        </S.PosterBox>
                      )}
                    </S.Button>
                  </div>
                ))
              : null}
            {searchValue !== '' &&
              movies.length === 0 &&
              series.length === 0 && (
                <S.NoPoster style={{ fontSize: '22px' }}>{`
                  We couldn't find anything related to "${searchValue}".`}</S.NoPoster>
              )}
          </S.MyListDisplay>
        )}
      </Container>
    </Section>
  );
};
