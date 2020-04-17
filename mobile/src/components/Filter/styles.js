import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 20px;
  background: transparent;
  border-bottom-color: ${props => (props.isActive ? '#7d40e7' : 'transparent')};
  border-bottom-width: ${props => (props.isActive ? '1' : '0')};

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${props => (props.isActive ? '#7d40e7' : '#999')};
  font-weight: bold;
  font-size: 16px;
`;
