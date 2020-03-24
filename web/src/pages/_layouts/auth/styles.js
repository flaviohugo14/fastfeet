import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  text-align: center;
  background: #fff;
  border-radius: 4px;
  height: 425px;
  box-shadow: 0px 0px 10px #00000033;
  padding: 60px 30px;

  img {
    width: 251px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 10px;
      margin-bottom: 15px;

      strong {
        font-size: 14px;
        color: #444;
      }

      input {
        margin-top: 10px;
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 15px;

        &::placeholder {
          font-size: 16px;
          color: #999;
        }
      }
    }

    button {
      border: 0;
      border-radius: 4px;
      background: #7d40e7;
      padding: 15px 30px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#7d40e7')};
      }
    }
  }
`;
