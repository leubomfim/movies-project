import styled, { css } from 'styled-components';

export const FormInput = styled.input`
  border-bottom: 1px solid #c4c4c4;
  ${({ error }) => css`
    ${error === 'error' && 'border-bottom: 1px solid red;'}
    ${error === 'success' && 'border-bottom: 1px solid lightgreen;'}
    ${error === '' && 'border-bottom: 1px solid #c4c4c4;'}
  `}
  background-color: transparent;
  padding: 10px;
  width: 100%;
  color: #c4c4c4;
  font-size: 20px;
  transition: border-bottom 0.5s ease;

  &:focus {
    border-bottom: 1px solid #7b2abf;
  }

  &:focus + label{
    font-size: 17px;
    bottom: 33px;
    color: #757575;
  }

`;

export const Button = styled.button`
  width: 100%;
  font-size: 25px;
  border-radius: 20px;
  padding: 7px 0;
  background: #7b2abf;
  color: #c4c4c4;
  margin-top: 30px;
  cursor: pointer;
`;

export const Small = styled.small`
  ${({ error }) => css`
    ${error === 'error' && 'color: red;'}
    ${
      error === 'success' &&
      `
        color: lightgreen;
      `
    }
    ${error === '' && null}
  `}
  position: absolute;
  font-size: 15px;
  bottom: -25px;
  left: 9px;
`;
