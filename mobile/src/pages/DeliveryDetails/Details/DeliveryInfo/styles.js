import styled from 'styled-components/native';

export const Container = styled.View`
  height: 260px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 3px #0000001a;
  elevation: 3;
  margin: 120px 22px 0;
  padding: 19px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  margin-left: 6px;
  color: #7d40e7;
  font-size: 16px;
  font-weight: bold;
`;

export const Content = styled.View`
  margin-top: 7px;
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Group = styled.View``;

export const Field = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #999;
`;

export const Value = styled.Text`
  color: #666;
  font-size: 16px;
  margin-top: 6px;
`;
