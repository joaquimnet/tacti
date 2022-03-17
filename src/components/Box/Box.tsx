import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { tacti } from '../../util/tacti';
import { DefaultProps, makeComponent } from '../../util/make-component';
import './Box.css';

export interface BoxProps extends DefaultProps {
  /** The strength of the shadow on the box. */
  height?: 0 | 1 | 2 | 3 | 4;
  /** The size of the border radius on the box. */
  borderSize?: 0 | 1 | 2 | 3 | 4;
}

const Box: React.FC<BoxProps> = ({
  children,
  component,
  className,
  height,
  borderSize,
  ...otherProps
}) => {
  const Component = makeComponent(component);
  const classes = classnames(tacti('Box'), className, {
    [tacti(`Box--height-${height}`)]: true,
    [tacti(`Box--borderSize-${borderSize}`)]: true,
  });
  return (
    <Component className={classes} {...otherProps}>
      {children}
    </Component>
  );
};

Box.propTypes = {
  height: PropTypes.oneOf([0, 1, 2, 3, 4]),
  borderSize: PropTypes.oneOf([0, 1, 2, 3, 4]),
};

Box.defaultProps = {
  height: 2,
  borderSize: 2,
};

export default Box;
