import styled from 'styled-components';

export const Section = styled.div`
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
`;

export const PostBg = styled.div`
  position: absolute;
  width: 266.66px;
  height: 400px;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.37);
  transition: all 300ms ease-in;

  &:hover {
    background-color: transparent
  };
`;

export const Post = styled.img`
  width: 266.66px;
  height: 400px;
`;
