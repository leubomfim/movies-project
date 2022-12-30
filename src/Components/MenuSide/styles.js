import styled, { css } from 'styled-components';

export const MenuBg = styled.div`
  transition: width 0.8s ease;
  top: 0;
  position: fixed;
  ${({ menu }) => css`
    ${menu ? 'width: 100%;' : 'width: 80px;'}

    height: 100vh;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.13);

    @media (max-width: 1224px) {
      ${menu ? 'width: 100%;' : 'width: 0px;'}
    }
  `}
`;

export const CloseMenu = styled.button`
  ${({ openMenu }) => css`
    ${
      !openMenu &&
      `
        display: none;
      `
    }
  `}
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 35px;
  color: #c4c4c4;
  background-color: transparent;
  cursor: pointer;
`;

export const MenuSide = styled.div`
  ${({ menu }) => css`
    ${menu ? 'width: 300px;' : 'width: 80px;'}
    position: fixed;
    z-index: 3;
    left: 0;
    top: 0;
    height: 100vh;
    padding: 20px;
    background: linear-gradient(20deg, rgba(98,95,105,1) 6%, rgba(37,29,54,1) 39%);
    overflow: hidden;
    transition: width 0.5s ease;


  @media (max-width: 1224px) {
    ${menu ? 'width: 300px;' : 'width: 0px;'}
    padding: 0;
  }

  @media (max-width: 600px) {
    ${menu ? 'width: 240px;' : 'width: 0px;'}
    padding: 0;
  }
  `}
`;

export const UserProfile = styled.div`
  flex-direction: column;
  margin-top: 80px;
  gap: 12px;
`;

export const Button = styled.button`
  width: 90%;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 25px;
  background: #6541ad;
  color: #c4c4c4;
  transition: all 0.6s ease;

  ${({ openMenu }) => css`
    ${
      !openMenu &&
      `
        display: none;
      `
    }
  `}

  &:hover {
  background: #7b2abf;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  margin-top: 50px;
`;

export const Item = styled.li`
  white-space: nowrap;
  & a {
    font-size: 25px;
    display: flex;
    color: #c4c4c4;
    font-weight: 600;
    transition: all 500ms ease;
    align-items: center;
    gap: 10px;
    justify-content: center;
  }

  & a:hover {
    color: #51A3F5;
  }
`;

export const UserPhoto = styled.button`
  ${({ photo }) => css`
    ${photo === '' && 'padding: 10px;'};
    ${photo !== '' && 'padding: auto;'};
  `};
  background-color: transparent;
  color:  #c4c4c4;
  border: 3px solid #c4c4c4;
  border-radius: 59%;
  cursor: pointer;
  transition: all 0.6s ease;
  overflow: hidden;
  margin-bottom: 15px;

  &:hover {
    background-color: #c4c4c425;
    border-color: #51A3F5;
    color:  #51A3F5;
  }

  & svg {
    width: 200px;
    height: 200px;
    ${({ openMenu }) => css`
    ${
      !openMenu &&
      `
        width: 30px;
        height: 30px;
      `
    }
  `}
  }
`;

export const UserName = styled.h2`
  color: #c4c4c4;
  transition: color 0.3s ease ;

  ${({ openMenu }) => css`
    ${
      !openMenu &&
      `
        display: none;
      `
    }
  `}

  &:hover {
    color:  #51A3F5;
  }
`;

export const UserIcon = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: 100% 100%;

  & {
    transition: all 0.3s ease ;
    width: 200px;
    height: 200px;
    ${({ openMenu }) => css`
    ${
      !openMenu &&
      `
        width: 45px;
        height: 45px;
      `
    }
  `}
  }
`;
