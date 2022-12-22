import * as S from './styles';
import load from '../../img/load.gif';

export const Loading = () => {
  return (
    <S.LoadingBg>
      <img src={load} alt="Load page" />
    </S.LoadingBg>
  );
};
