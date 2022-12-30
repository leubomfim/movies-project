import { useMoviesContext } from '../../Contexts/context';
import { Container } from '../Container';
import { BiMenuAltLeft } from 'react-icons/bi';
import * as S from './styles';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

export const Header = () => {
  const { openMenu, setOpenMenu, link } = useMoviesContext();

  return (
    <S.Header>
      <S.MenuAndList>
        <S.MenuButton
          title="Open menu"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          <BiMenuAltLeft />
        </S.MenuButton>
      </S.MenuAndList>
      <Container>
        <S.LogoBox>
          {!link && <S.Logo src={logo} />}
          {link && (
            <Link to="/">
              <S.Logo src={logo} />
            </Link>
          )}
        </S.LogoBox>
      </Container>
    </S.Header>
  );
};
