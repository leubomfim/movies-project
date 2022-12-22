import { useMoviesContext } from '../../Contexts/context';
import {
  AiOutlineClose,
  AiOutlineUser,
  AiFillHome,
  AiOutlineSearch,
} from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { BiCameraMovie, BiMoviePlay } from 'react-icons/bi';
import * as S from './styles';
import { Link } from 'react-router-dom';

export const MenuSide = () => {
  const { openMenu, setOpenMenu, logged, navigate, setLink } =
    useMoviesContext();

  return (
    <S.MenuBg menu={openMenu}>
      <S.MenuSide id="menu" menu={openMenu}>
        <S.CloseMenu
          openMenu={openMenu}
          onClick={() => setOpenMenu(false)}
          className="display"
        >
          <AiOutlineClose />
        </S.CloseMenu>
        <div>
          <div>
            {Object.values(logged).length > 0 ? (
              <S.UserProfile openMenu={openMenu} className="display">
                <S.UserPhoto
                  title="Click here to change photo"
                  onClick={() => {
                    setOpenMenu(false);
                    navigate('/selectPhoto');
                  }}
                  openMenu={openMenu}
                  className="display"
                  photo={logged.userPhoto}
                >
                  {logged.userPhoto === '' && <AiOutlineUser />}
                  {logged.userPhoto !== '' && (
                    <S.UserIcon openMenu={openMenu} src={logged.userPhoto} />
                  )}
                </S.UserPhoto>
                <S.UserName openMenu={openMenu}>{logged.name}</S.UserName>
              </S.UserProfile>
            ) : (
              <S.UserProfile openMenu={openMenu} className="display">
                <S.Button
                  onClick={() => {
                    setOpenMenu(false);
                    setLink(true);
                    navigate('/login');
                  }}
                  openMenu={openMenu}
                >
                  Login
                </S.Button>
                <S.Button
                  onClick={() => {
                    setOpenMenu(false);
                    navigate('/register');
                    setLink(true);
                  }}
                  openMenu={openMenu}
                >
                  Register
                </S.Button>
              </S.UserProfile>
            )}
          </div>
          <nav>
            <S.List>
              <S.Item>
                <Link to="/" onClick={() => setOpenMenu(false)}>
                  <AiFillHome /> {openMenu ? 'Home' : ''}
                </Link>
              </S.Item>
              <S.Item>
                <Link to="/search" onClick={() => setOpenMenu(false)}>
                  <AiOutlineSearch /> {openMenu ? 'Search' : ''}
                </Link>
              </S.Item>
              <S.Item>
                <Link to="/mylist" onClick={() => setOpenMenu(false)}>
                  <IoMdAdd /> {openMenu ? 'My List' : ''}
                </Link>
              </S.Item>
              <S.Item>
                <Link to="/series" onClick={() => setOpenMenu(false)}>
                  <BiMoviePlay /> {openMenu ? 'Series' : ''}
                </Link>
              </S.Item>
              <S.Item>
                <Link to="/movies" onClick={() => setOpenMenu(false)}>
                  <BiCameraMovie /> {openMenu ? 'Movies' : ''}
                </Link>
              </S.Item>
            </S.List>
          </nav>
        </div>
      </S.MenuSide>
    </S.MenuBg>
  );
};
