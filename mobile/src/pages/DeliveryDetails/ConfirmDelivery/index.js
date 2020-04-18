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
    const dataFile = new FormData();

    dataFile.append('file', {
      type: 'image/jpg',
      uri,
      name: 'signature.jpg',
    });

    try {
      const signatureReponse = await api.post('files/signature', dataFile);

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
      Alert.alert('Falha ao confirmar', 'Por favor, tente novamente.', [
        {
          title: 'Ok',
          onPress: () => navigation.navigate('Details'),
        },
      ]);
    }
  }

  async function handletakePicture() {
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
            <Camera ref={cameraRef} type="back" captureAudio={false} />
            <TakePictureButton onPress={handletakePicture}>
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
