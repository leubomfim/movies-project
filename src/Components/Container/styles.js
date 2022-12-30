import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1240px;

  @media (max-width: 1440px) {
    width: 70%;
  }

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 900px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }

`;
