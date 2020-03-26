import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  @media only screen and (max-width: 900px) {
    height: 100px;
  }

  height: 64px;
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
  }

  aside {
    display: flex;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      strong {
        font-size: 14px;
        color: #666;
        font-weight: bold;
      }

      a {
        margin-top: 5px;
        color: #de3b3b;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;

  span {
    font-size: 15px;
    color: ${props => (props.select ? '#444' : '#999')};
    font-weight: bold;

    &:hover {
      cursor: pointer;
    }
  }
`;
