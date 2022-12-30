import styled from 'styled-components';

export const Section = styled.section`
  margin: 150px 0px 0;
  padding-bottom: 60px;
  position: relative;
  overflow: hidden;
`;

export const DetailsBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  gap: 50px;
  align-items: center;
`;

export const DetailsArea = styled.div`
  color: #c4c4c4;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const MovieTitle = styled.h2`
  white-space: nowrap;
  text-align: center;
  margin-top: 15px;
  font-size: 32px;
`;

export const TagLine = styled.h4`
  white-space: nowrap;
  margin: 20px 0;
  font-size: 24px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin-top: 5px;
  text-transform: capitalize;

  & a {
    color: #c4c4c4;
    text-decoration: underline;
  }
`;

export const Span = styled.span`
  font-weight: 800;
`;

export const Button = styled.button`
  cursor: pointer;
  color: #c4c4c4;
  padding: 6px 20px;
  font-size: 25px;
  font-weight: 600;
  border-radius: 10px;
  background-color: #6541ad;
  margin-top: 50px;
`;

export const Columns = styled.div`
  display: flex;
  gap: 143px;
  align-items: flex-start;
  justify-content: center;
`;

export const Post = styled.img`
  width: 266.66px;
  height: 400px;
`;
