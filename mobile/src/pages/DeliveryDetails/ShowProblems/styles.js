import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  position: relative;
  background: #fff;
  flex: 1;
`;

export const HeaderBackground = styled.View`
  position: absolute;
  background: #7d40e7;
  height: 205px;
  width: ${Dimensions.get('window').width}px;
`;

export const Header = styled.View`
  elevation: 3;
  margin: 120px 22px 0;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 24px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
`;
