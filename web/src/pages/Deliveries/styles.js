import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding-top: 34px;
  margin: 0 auto;
  max-width: 1200px;
  width: 90%;
`;

export const Content = styled.div`
  div {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    margin-top: 34px;

    input {
      height: 36px;
      width: 237px;
      padding: 9px 40px;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: #fff;
      background: #7d40e7;
      font-weight: bold;
      font-size: 14px;
      border-radius: 4px;
      height: 36px;
      padding: 0 21px;

      &:hover {
        background: ${darken(0.06, '#7d40e7')};
      }
    }
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
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 14px;
  padding: 20px 25px;
  height: 60px;
  background: #fff;
  border-radius: 4px;

  span {
    width: calc(100% / 7);
    color: #666;
    font-size: 16px;
    overflow: hidden;
  }

  div {
    width: calc(100% / 7);
    display: flex;
    align-items: center;

    svg {
      margin-left: 15px;
    }
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
    width: calc(100% / 7);
    color: #444;
    overflow: hidden;
  }
`;

export const Tag = styled.div`
  width: calc(100% / 7);
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    display: inline-block;
    height: 10px;
    width: 10px;
    background: #2ca42b;
    border-radius: 50%;
    margin-right: 6px;
  }

  div {
    font-weight: bold;
    color: #2ca42b;
    font-size: 14px;
    width: 110px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #dff0df;
    border-radius: 12px;
  }
`;
