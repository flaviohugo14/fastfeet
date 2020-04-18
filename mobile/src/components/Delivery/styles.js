import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  height: 225px;
  margin: 0 25px 30px;
  box-shadow: 0 0 4px #0000001a;
  justify-content: space-between;

  elevation: 3;
`;

export const Content = styled.View`
  padding: 19px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: #7d40e7;
  font-weight: bold;
  font-size: 19px;
  margin-left: 13px;
`;

export const Footer = styled.View`
  background: #f8f9fd;
  height: 85px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 29px;
`;

export const Group = styled.View``;

export const Field = styled.Text`
  font-size: 10px;
  color: #999;
`;

export const Value = styled.Text`
  font-size: 16px;
  color: #444;
  font-weight: bold;
  overflow: hidden;
  max-width: 100px;
`;

export const LookDetailsButton = styled.TouchableOpacity``;

export const Text = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7d40e7;
`;
