import styled, { css } from 'styled-components';

export const FormBg = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  background-color: rgba(221, 221, 221, 0.06);
  padding: 20px;
  border-radius: 10px;
  max-width: 700px;
  width: 90%;
`;

export const FormTitle = styled.h2`
  font-size: 32px;
  color: #c4c4c4;
  text-align: center;
  margin-bottom: 20px;
  font-weight: normal;
`;

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

export const FormDisplay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const FormControl = styled.div`
  width: 100%;
  position: relative;
`;

export const FormName = styled.div`
  display: flex;
  gap: 15px;
`;

export const LabelName = styled.label`
  ${({ name }) => css`
    ${
      name !== '' &&
      `
        font-size: 17px;
        bottom: 33px;
        color: #757575;
      `
    }
  `}
`;

export const LabelEmail = styled.label`
  ${({ email }) => css`
    ${
      email !== '' &&
      `
        font-size: 17px;
        bottom: 33px;
        color: #757575;
      `
    }
  `}
`;

export const LabelLast = styled.label`
  ${({ lastName }) => css`
    ${
      lastName !== '' &&
      `
        font-size: 17px;
        bottom: 33px;
        color: #757575;
      `
    }
  `}
`;

export const LabelPassword = styled.label`
  ${({ password }) => css`
    ${
      password !== '' &&
      `
        font-size: 17px;
        bottom: 33px;
        color: #757575;
      `
    }
  `}
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

export const ErrorBox = styled.div`

`;
export const ErrorText = styled.p`

`;
