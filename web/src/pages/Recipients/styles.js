import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding-top: 34px;
  margin: 0 auto;
  max-width: 1200px;
  width: 90%;
`;

export const Content = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 34px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        position: relative;
        left: -222px;
      }

      input {
        height: 36px;
        width: 237px;
        padding: 9px 40px;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
      }
    }

    button {
      span {
        @media only screen and (max-width: 475px) {
          display: none;
        }
      }

      display: flex;
      align-items: center;
      justify-content: space-around;
      color: #fff;
      background: #7d40e7;
      border: 0;
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

  .id {
    max-width: 50px;
  }
  .action {
    max-width: 50px;
  }
  .address {
    max-width: 500px;
    width: 60%;
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
    width: calc(100% / 4);
    color: #444;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
