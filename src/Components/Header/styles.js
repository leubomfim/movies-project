import styled from 'styled-components';

export const Header = styled.header`
  background: rgba(37,29,54,1);
  transition: all 0.8s ease;
  padding: 20px 0;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`;

export const Logo = styled.img`
  width: 200px;
  height: 40px;

  @media (max-width: 425px) {
    width: 170px;
    margin-left: 30px;
  };
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const MenuAndList = styled.div`
  position: absolute;
  left: 100px;

  @media (max-width: 425px) {
    left: 20px;
  }
`;

export const MenuButton = styled.button`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: transparent;
  cursor: pointer;
  transition: all 500ms ease;

  &:hover {
    color: #51A3F5;
  }
`;
