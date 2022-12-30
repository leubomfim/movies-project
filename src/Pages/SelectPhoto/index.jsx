import * as S from './styles';
import icon1 from '../../img/icon.jpg';
import icon2 from '../../img/icon2.jpeg';
import icon3 from '../../img/icon3.webp';
import icon4 from '../../img/icon4.jpeg';
import icon5 from '../../img/icon5.png';
import icon6 from '../../img/icon6.jpg';
import icon7 from '../../img/icon7.jpg';
import icon8 from '../../img/icon8.jpg';
import { useEffect, useState } from 'react';
import { useMoviesContext } from '../../Contexts/context';
import { AiOutlineUser } from 'react-icons/ai';

export const SelectPhoto = () => {
  const { movieAccount, logged, setOpenMenu } = useMoviesContext();
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8];
  const [icon, setIcon] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [resetPage, setResetPage] = useState(false);
  const [changed, setChanged] = useState(false);
  const [counter, setCounter] = useState(3);
  useEffect(() => {
    document.title = 'Change photo';
    localStorage.setItem('movieAccount', JSON.stringify(movieAccount));
    localStorage.setItem('movieLogged', JSON.stringify(logged));
  }, [movieAccount, logged, resetPage]);

  useEffect(() => {
    let timeout;
    if (changed) {
      timeout = setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
    }

    if (counter === 0) {
      clearTimeout(timeout);
      setChanged(false);
      setCounter(3);
    }
  }, [changed, counter]);

  const handleChangePhoto = () => {
    setChanged(true);
    const filterAccount = movieAccount.filter((ac) => {
      return ac.email === logged.email;
    });

    logged.userPhoto = icon;
    filterAccount[0].userPhoto = icon;

    setResetPage(!resetPage);
    setOpenMenu(true);
    setIcon('');
    setDisabled(true);
  };

  return (
    <S.IconsBg>
      <S.ChangedNoticeBox changed={changed}>
        <S.ChangedTitle>Successfully changed!</S.ChangedTitle>
      </S.ChangedNoticeBox>
      <S.Container>
        <S.ChangeBox>
          <S.DisplayIcons>
            {icons.map((i, index) => (
              <S.ButtonIcon
                onClick={(e) => {
                  setIcon(e.target.src);
                  setDisabled(false);
                }}
                key={index}
              >
                <S.Icon src={i} />
              </S.ButtonIcon>
            ))}
            <S.ButtonIcon>
              <AiOutlineUser
                onClick={() => {
                  setIcon('');
                  setDisabled(false);
                }}
              />
            </S.ButtonIcon>
          </S.DisplayIcons>
          <S.ButtonsArea>
            <S.Button
              onClick={() => handleChangePhoto()}
              disabled={disabled}
              change={true}
            >
              Change
            </S.Button>
            <S.Button
              onClick={() => {
                setDisabled(true);
                setIcon('');
              }}
              change={false}
            >
              Cancel
            </S.Button>
          </S.ButtonsArea>
        </S.ChangeBox>
      </S.Container>
    </S.IconsBg>
  );
};
