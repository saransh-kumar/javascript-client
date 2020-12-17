import React from 'react';
import PropTypes from 'prop-types';
import { ButStyle } from './style';

export const Button = (props) => {
  const {
    color, style, value, disabled, onClick,
  } = props;
  return (
    <>
      <ButStyle
        type={value}
        color={color}
        disabled={disabled}
        onClick={onClick}
        style={style}
      >
        {value}
      </ButStyle>
    </>
  );
};
Button.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
Button.defaultProps = {
  color: '',
  disabled: false,
  style: {},
};