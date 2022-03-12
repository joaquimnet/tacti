import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { tacti } from '../../util/tacti';
import { DefaultProps, makeComponent } from '../../util/make-component';
import './Box.css';

export interface BoxProps extends DefaultProps {
  /** The strength of the shadow on the box. */
  height?: 1 | 2 | 3 | 4;
}

const Box: React.FC<BoxProps> = ({ children, component, className, height, ...otherProps }) => {
  const Component = makeComponent(component);
  const classes = classnames(tacti('Box'), className, {
    [tacti(`Box--height-1`)]: height === 1,
    [tacti(`Box--height-2`)]: height === 2,
    [tacti(`Box--height-3`)]: height === 3,
    [tacti(`Box--height-4`)]: height === 4,
  });
  return (
    <Component className={classes} {...otherProps}>
      {children}
    </Component>
  );
};

Box.propTypes = {
  height: PropTypes.oneOf([1, 2, 3, 4]),
};

Box.defaultProps = {
  height: 2,
};

export default Box;
