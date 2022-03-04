import React from 'react';
import PropTypes from 'prop-types';

interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
