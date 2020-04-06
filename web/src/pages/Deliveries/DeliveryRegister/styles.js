import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding-top: 34px;
  margin: 0 auto;
  max-width: 900px;
  width: 90%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;

      button {
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
        border-radius: 4px;
        height: 36px;
        padding: 0 21px;
        margin-left: 16px;

        &#return {
          background: #ccc;
          transition: 0.2s background;
          &:hover {
            background: ${darken(0.05, '#ccc')};
          }
        }

        &#save {
          background: #7d40e7;
          transition: 0.2s background;

          &:hover {
            background: ${darken(0.05, '#7d40e7')};
          }
        }

        svg {
          margin-right: 5px;
        }
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

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 27px;
  padding: 26px 30px;
  background: #fff;
  border-radius: 4px;

  > div {
    display: flex;
    width: 100%;

    label {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 50%;

      &#recipients {
        margin-right: 30px;
      }
    }
  }

  strong {
    color: #444;
    font-size: 14px;
    margin-bottom: 9px;
  }

  > label {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    margin-top: 16px;

    input {
      height: 45px;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 12px 15px;
    }
  }
`;
