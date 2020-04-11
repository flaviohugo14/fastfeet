import React from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import Popup from 'reactjs-popup';

import PropTypes from 'prop-types';

import { PopUpButton } from './styles';

export default function ActionButton({ children, big, ...rest }) {
  return (
    <Popup
      trigger={
        <PopUpButton type="button">
          <MdMoreHoriz color="#C6C6C6" size={25} />
        </PopUpButton>
      }
      position="bottom center"
      contentStyle={
        big
          ? {
              width: '210px',
              borderRadius: '4px',
              borderColor: '#FFF',
            }
          : {
              width: '150px',
              borderRadius: '4px',
              borderColor: '#FFF',
            }
      }
      arrowStyle={{
        borderColor: '#FFF',
        boxShadow: '1px 1px 1px #00000010',
      }}
      {...rest}
    >
      {children}
    </Popup>
  );
}

ActionButton.propTypes = {
  children: PropTypes.element.isRequired,
  big: PropTypes.bool.isRequired,
};
