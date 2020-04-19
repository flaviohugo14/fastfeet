import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

export const Container = styled.View`
  margin: 13px 22px 10px;
  flex-direction: row;
  border-radius: 4px;
  background: #f8f9fd;
  height: 100px;

  box-shadow: 0 0 3px #0000001a;
  elevation: 3;
`;

export const Text = styled.Text`
  color: #999;
  font-size: 14px;
  overflow: hidden;
  max-width: 80px;
  text-align: center;

  margin-top: 2px;
`;

export const InfoProblem = styled.TouchableOpacity`
  width: ${(Dimensions.get('window').width - 44) / 3}px;
  height: 100%;
  align-items: center;
  justify-content: center;

  border-style: solid;
  border-right-color: #0000001a;
  border-right-width: 1px;

  opacity: ${props => (props.disabled ? 0.4 : 1)};
`;

export const ShowProblems = styled.TouchableOpacity`
  width: ${(Dimensions.get('window').width - 44) / 3}px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ConfirmDelivery = styled.TouchableOpacity`
  width: ${(Dimensions.get('window').width - 44) / 3}px;
  height: 100%;
  align-items: center;
  justify-content: center;

  border-style: solid;
  border-left-color: #0000001a;
  border-left-width: 1px;

  opacity: ${props => (props.disabled ? 0.4 : 1)};
`;

export const ConfirmWithdrawal = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row
  justify-content: center;

  opacity: ${props => (props.disabled ? 0.4 : 1)};
`;

export const ContainerSmall = styled.View`
  margin: 13px 22px 0;
  flex-direction: row;
  border-radius: 4px;
  background: #f8f9fd;
  height: 40px;
  align-items: center;
  justify-content: center;

  box-shadow: 0 0 3px #0000001a;
  elevation: 3;
`;

export const TextLarge = styled.Text`
  color: #999;
  font-size: 14px;
  margin-left: 5px;
`;
