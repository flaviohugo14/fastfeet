import React from 'react';
import { StatusBar, ScrollView } from 'react-native';

import PropTypes from 'prop-types';

import DeliveryInfo from './DeliveryInfo';
import DeliverySituation from './DeliverySituation';
import DeliveryActions from './DeliveryActions';

import { Container, HeaderBackground } from './styles';

export default function Details({ navigation }) {
  const delivery = navigation.getParam('data');

  function returnStatus(Delivery) {
    /**
     * Deliveries canceled does not showed in Dashboard
     */

    if (Delivery.end_date) {
      return 'Entregue';
    }
    if (Delivery.start_date && !Delivery.end_date) {
      return 'Retirada';
    }
    return 'Pendente';
  }

  const status = returnStatus(delivery);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Container>
        <HeaderBackground />
        <ScrollView showsVerticalScrollIndicator={false}>
          <DeliveryInfo
            recipient={delivery.recipient}
            product={delivery.product}
          />
          <DeliverySituation delivery={delivery} status={status} />
          <DeliveryActions
            delivery={delivery}
            status={status}
            navigation={navigation}
          />
        </ScrollView>
      </Container>
    </>
  );
}

Details.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
