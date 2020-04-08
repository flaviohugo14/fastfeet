import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 34px;
  margin: 0 auto;
  max-width: 1200px;
  width: 90%;
`;

export const Content = styled.div`
  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 34px;
  }
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
  color: #444444;
  display: block;
`;

export const Table = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;

  .id {
    max-width: 100px;
  }
  .description {
    width: 70%;
  }
  .action {
    max-width: 50px;
  }
`;

export const Thead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 25px;

  span {
    font-weight: bold;
    font-size: 16px;
    width: calc(100% / 3);
    color: #444;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
