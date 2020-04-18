import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { RNCamera } from 'react-native-camera';
import { RectButton } from 'react-native-gesture-handler';

import button from '~/components/Button';

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

export const Content = styled.View`
  margin: -60px 20px 0 20px;
  flex: 1;
`;

export const CameraWrapper = styled.View`
  width: 100%;
  height: 90%;
  border-radius: 4px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
`;

export const Button = styled(button)`
  background: #7d40e7;
  margin: 15px 0 15px 0;
`;

export const TakePictureButton = styled(RectButton)`
  background: rgba(000, 000, 000, 0.5);
  position: absolute;
  padding: 20px;
  border-radius: 100px;
  bottom: 25px;
  align-self: center;
`;
