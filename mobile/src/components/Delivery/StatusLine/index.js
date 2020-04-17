import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Line,
  StatusContainer,
  LabelContainer,
  Dot,
  Label,
} from './styles';

export default function StatusLine({ start = null, end = null }) {
  const taken = !!start;
  const delivered = !!end;

  return (
    <Container>
      <Line />
      <StatusContainer>
        <LabelContainer>
          <Dot filled />
          <Label>Aguardando Retirada</Label>
        </LabelContainer>

        <LabelContainer>
          <Dot filled={taken} />
          <Label>Retirada</Label>
        </LabelContainer>

        <LabelContainer>
          <Dot filled={delivered} />
          <Label>Entregue</Label>
        </LabelContainer>
      </StatusContainer>
    </Container>
  );
}

StatusLine.defaultProps = {
  start: null,
  end: null,
};

StatusLine.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
};
