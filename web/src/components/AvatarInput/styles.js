import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 150px;
      width: 150px;
      object-fit: cover;
      border-radius: 50%;
      background: #eee;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 1px dashed #ddd;

      svg {
        height: 50px;
        width: 50px;
      }

      span {
        color: #ddd;
        font-size: 16px;
      }
    }

    input {
      display: none;
    }
  }
`;
