import styled, { css } from 'styled-components';

export const FormControl = styled.div`
  width: 100%;
  position: relative;
`;

export const FormInput = styled.input`
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
  border-bottom: 1px solid #c4c4c4;
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
  `}
  position: absolute;
  font-size: 17px;
  top: 40px;
  left: 20px;

  @media (max-width: 600px) {
    top: auto;
    bottom: 15px;
  }
`;
