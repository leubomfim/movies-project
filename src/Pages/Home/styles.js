import styled from 'styled-components';

export const Section = styled.section`
  margin: 150px 0;
`;

export const Movies = styled.div`
  position: relative;
`;

export const SectionTitle = styled.h2`
  color: #c4c4c4;
  white-space: nowrap;
`;

export const MovieTitle = styled.h2`
  white-space: nowrap;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin-top: 5px;
`;

export const Span = styled.span`
  font-weight: 800;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;

  @media (max-width: 1440px) {
    width: 100%;
  }
`;

export const PostBg = styled.div`
  position: absolute;
  width: 266.66px;
  height: 400px;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.37);
  transition: all 300ms ease-in;

  &:hover {
    background-color: transparent
  };

  @media (max-width: 1440px) {
    width: 100%;
  }
`;

export const PostBox = styled.div`
  @media (max-width: 1440px) {
    width: 100%;
  }
`;

export const Post = styled.img`
  width: 266.66px;
  height: 400px;

  @media (max-width: 1440px) {
    width: 100%;
  }
`;
