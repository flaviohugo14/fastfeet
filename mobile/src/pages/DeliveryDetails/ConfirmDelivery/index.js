import React, { useRef, useState } from 'react';
import { Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import api from '~/services/api';

import {
  Container,
  HeaderBackground,
  Content,
  CameraWrapper,
  Camera,
  Button,
  TakePictureButton,
} from './styles';

export default function ConfirmDelivery({ navigation }) {
  const deliverymanId = useSelector(state => state.deliveryman.profile.id);

  const deliveryId = navigation.getParam('id');

  const [uri, setUri] = useState('');

  const cameraRef = useRef(null);

  async function handleSubmit() {
    const data = new FormData();

    data.append('file', {
      type: 'image/jpeg',
      uri,
      name: uri.split('/').pop(),
    });

    try {
      const signatureReponse = await api.post('files/signature', data);
      await api.put(`deliveryman/${deliverymanId}/deliveries/${deliveryId}`, {
        signature_id: signatureReponse.data.id,
        end_date: new Date(),
      });

      Alert.alert('Entrega confirmada!', 'Assinatura enviada com sucesso!', [
        {
          title: 'Ok',
          onPress: () => navigation.navigate('Deliveries'),
        },
      ]);
    } catch (err) {
      Alert.alert('Falha ao enviar foto', 'Por favor, tente novamente.', [
        {
          title: 'Ok',
          onPress: () => navigation.navigate('Details'),
        },
      ]);
    }
  }

  async function handleTakePicture() {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      await setUri(data.uri);
    }
  }

  return (
    <Container>
      <HeaderBackground />
      <Content>
        {uri ? (
          <CameraWrapper>
            <Image source={{ uri }} style={{ height: '100%' }} />
          </CameraWrapper>
        ) : (
          <CameraWrapper>
            <Camera
              ref={cameraRef}
              captureAudio={false}
              type={Camera.Constants.Type.back}
              autoFocus={Camera.Constants.AutoFocus.on}
              flashMode={Camera.Constants.FlashMode.off}
            />
            <TakePictureButton onPress={handleTakePicture}>
              <Icon name="photo-camera" color="#fff" size={30} />
            </TakePictureButton>
          </CameraWrapper>
        )}
        <Button onPress={handleSubmit} loading={false}>
          Enviar
        </Button>
      </Content>
    </Container>
  );
}

ConfirmDelivery.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
  }).isRequired,
};
