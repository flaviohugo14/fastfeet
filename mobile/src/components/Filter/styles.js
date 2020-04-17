import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 20px;
  background: transparent;
  border-bottom-color: ${props => (props.isActive ? '#7d40e7' : 'transparent')};
  border-bottom-width: 1px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${props => (props.isActive ? '#7d40e7' : '#999')};
  font-weight: bold;
  font-size: 16px;
`;
