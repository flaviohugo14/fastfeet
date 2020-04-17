import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  position: relative;
`;

export const HeaderBackground = styled.View`
  position: absolute;
  background: #7d40e7;
  height: 205px;
  width: ${Dimensions.get('window').width}px;
`;
