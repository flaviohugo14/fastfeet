import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  box-shadow: 0px 0px 5px #00000033;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
      width: 100%;
      max-width: 156px;
    }
  }

  aside {
    @media only screen and (max-width: 860px) {
      display: none;
    }

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
    }
  }
`;

export const Tab = styled.div`
  @media only screen and (max-width: 860px) {
    display: ${props => (props.show ? 'flex' : 'none')};
  }

  span {
    @media only screen and (max-width: 860px) {
      margin: 0;
    }
    font-size: 15px;
    color: ${props => (props.select ? '#444' : '#999')};
    font-weight: bold;
    margin-right: 15px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ButtonToggle = styled.button`
  display: none;
  background: #fff;
  border: none;
  height: 28px;
  margin: auto 0;

  @media only screen and (max-width: 860px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MenuContainer = styled.div`
  display: none;
  @media only screen and (max-width: 860px) {
    display: ${props => (props.show ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 180px;
    background: #fff;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.03);
  }
`;

export const Logoff = styled.a`
  @media only screen and (max-width: 860px) {
    margin: 0;
    font-size: 16px;
  }

  margin-top: 5px;
  color: #de3b3b;

  &:hover {
    cursor: pointer;
  }
`;
