import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 14px;
  padding: 20px 25px;
  height: 60px;
  background: #fff;
  border-radius: 4px;

  > div {
    width: calc(100% / 5);
    display: flex;
    align-items: center;

    > img {
      height: 35px;
      width: 35px;
      border-radius: 50%;
      align-self: center;
      margin-right: 5px;
    }

    > span {
      color: #666;
      font-size: 16px;
      overflow: hidden;
      max-width: 180px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

export const ActionContainer = styled.div`
  width: 100% !important;
  padding: 10px;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding-bottom: 5px;
    margin-bottom: 5px;
    border-bottom: 1px solid #eee;
    :nth-last-child(1) {
      border: none;
      margin: 0;
      padding: 0;
    }
    span {
      margin-left: 8px;
      font-size: 16px;
      color: #999999;
    }

    button {
      display: flex;
      align-items: center;
      background: none;
      border: none;
    }
  }
`;
