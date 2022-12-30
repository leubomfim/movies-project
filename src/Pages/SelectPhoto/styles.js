import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;

  @media screen and (max-width: 1300px) {
    width: 90%;
  }
`;

export const IconsBg = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-x: hidden;

  @media (max-width: 900px) {
    height: 100%;
  }
`;

export const ChangeBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  margin-top: 125px;

  @media (max-width: 1440px) {
    margin-top: 275px;;
  }

  @media (max-width: 900px) {
    margin-top: 150px;;
  }
`;

export const DisplayIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 73px;
`;

export const Icon = styled.img`
  width: 200px;
  height: 200px;
`;

export const ButtonIcon = styled.button`
  cursor: pointer;
  background-color: rgba(221, 221, 221, 0.06);
  color: #c4c4c4;
  height: 200px;

  & svg {
    width: 200px;
    height: 100%;
  }
`;

export const ButtonsArea = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 60px;
`;

export const Button = styled.button`
  ${({ change }) => css`
    ${change && 'background-color: #6541ad;'}
    ${!change && 'background-color: red;'}
  `}
  color: white;
  padding: 7px 20px;
  cursor: pointer;
  font-size: 25px;
  border-radius: 10px;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const ChangedNoticeBox = styled.div`
  ${({ changed }) => css`
    ${
      changed
        ? `
          right: 50px;

          @media (max-width: 600px) {
            right: 30px;
          }
        `
        : 'right: -269px;'
    }
  `}
  transition: all 0.5s ease;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  position: fixed;
  top: 130px;

`;

export const ChangedTitle = styled.h4`
  font-size: 23px;
  color: green;
`;
