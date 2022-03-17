import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { tacti } from '../../util/tacti';
import { DefaultProps, makeComponent } from '../../util/make-component';
import './Button.css';

export interface ButtonProps extends DefaultProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  size,
  color,
  className,
  component,
  style = {},
  ...otherProps
}) => {
  const Component = makeComponent(component, 'button');
  const classes = classnames(tacti('Button'), className, {
    [tacti(`Button--size-${size}`)]: true,
  });
  // @ts-expect-error This is okay.
  const content = Component === 'input' ? { value: label } : { children: label };
  return (
    <Component
      className={classes}
      style={{ ...style, background: color }}
      {...content}
      {...otherProps}
    >
      {label}
    </Component>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  size: 'medium',
  color: '#4791ce',
};

export default Button;
