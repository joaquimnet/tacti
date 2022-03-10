import React from 'react';
import PropTypes from 'prop-types';

import { tacti } from '../../util/tacti';
import './Button.css';
import classNames from 'classnames';

export interface ButtonProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  color: string;
  style: React.CSSProperties;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  size = 'medium',
  color = '#4791ce',
  style = {},
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      style={{ ...style, background: color }}
      className={classNames(tacti('button'), tacti(`button-${size}`))}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
