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
    width: calc(100% / 7);
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

export const Tag = styled.div`
  width: calc(100% / 7);
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    display: inline-block;
    height: 10px;
    width: 10px;
    background: ${props => {
      if (props.status === 'ENTREGUE') {
        return '#2ca42b';
      }
      if (props.status === 'RETIRADA') {
        return '#4D85EE';
      }
      if (props.status === 'CANCELADA') {
        return '#DE3B3B';
      }
      return '#C1BC35';
    }};
    border-radius: 50%;
    margin-right: 6px;

    @media only screen and (max-width: 810px) {
      margin: 0;
    }
  }

  div {
    font-weight: bold;
    color: ${props => {
      if (props.status === 'ENTREGUE') {
        return '#2ca42b';
      }
      if (props.status === 'RETIRADA') {
        return '#4D85EE';
      }
      if (props.status === 'CANCELADA') {
        return '#DE3B3B';
      }
      return '#C1BC35';
    }};
    font-size: 14px;
    width: 125px;
    height: 25px;
    display: flex;
    padding: 0 10px;
    align-items: center;
    justify-content: center;
    background: ${props => {
      if (props.status === 'ENTREGUE') {
        return '#DFF0DF';
      }
      if (props.status === 'RETIRADA') {
        return '#BAD2FF';
      }
      if (props.status === 'CANCELADA') {
        return '#FAB0B0';
      }
      return '#F0F0DF';
    }};
    border-radius: 12px;

    @media only screen and (max-width: 810px) {
      border-radius: 50%;
      padding: 0;
      width: 26px;
      height: 26px;
    }
  }

  strong {
    @media only screen and (max-width: 810px) {
      display: none;
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
  }
`;
