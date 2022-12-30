import styled from 'styled-components';

export const SectionTitle = styled.h2`
  color: #c4c4c4;
  font-size: 32px;
  margin-bottom: 60px;
`;

export const MyListDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;

  @media (max-width: 900px) {
    gap: 80px;
  }

  @media (max-width: 600px) {
    gap: 50px;
  }
`;

export const Box = styled.div`
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  position: relative;

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
export const Post = styled.img`
  width: 266.66px;
  height: 400px;

  @media (max-width: 1440px) {
    width: 100%;
  }
`;
