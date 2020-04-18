import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import Button from '~/components/Button';

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

export const Box = styled.View`
  padding: 20px;
  height: 300px;
  background: #fff;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ddd;

  box-shadow: 0 0 3px #0000001a;

  margin: 150px 22px 0;
  elevation: 3;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  textAlignVertical: 'top',
  padding: 0,
})`
  flex: 1;
  font-size: 16px;
  margin-left: 10px;
  color: #333;
  min-height: 250px;
  font-weight: 400;
  line-height: 21px;
`;

export const SubmitButton = styled(Button)`
  background: #7d40e7;
  color: #fff;
  margin: 25px 22px 0;
`;
