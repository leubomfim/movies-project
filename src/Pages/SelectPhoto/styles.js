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
`;

export const ChangeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
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
