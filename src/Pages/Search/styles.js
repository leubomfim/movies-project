import styled, { css } from 'styled-components';

export const SearchInput = styled.input`
  width: 100%;
  padding: 20px 20px 20px 70px;
  font-size: 24px;
  color: #c4c4c4;
  background-color: rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: rgba(255,255,255,0.7);
  }
`;

export const MyListDisplay = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FormControl = styled.div`
  position: relative;
`;

export const IconsPosition = styled.button`
  position: absolute;
  ${({ search }) => css`
    ${
      search
        ? `
            cursor: default;
            left: 15px;
            top: 50%;
            font-size: 35px;
            margin-top: -17.5px;
          `
        : `
          cursor: pointer;
          font-size: 24px;
          right: 15px;
          top: 50%;
          margin-top: -12px;
        `
    }

    color: #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  `}
`;

export const PosterBox = styled.div`
  width: 266.66px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const NoPoster = styled.h4`
  color: #c4c4c4;
  font-size: 32px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  position: relative;

  @media (max-width: 600px) {
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

  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const Post = styled.img`
  width: 266.66px;
  height: 400px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
