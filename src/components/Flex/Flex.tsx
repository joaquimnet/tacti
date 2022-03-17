import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { tacti } from '../../util/tacti';
import { DefaultProps, makeComponent } from '../../util/make-component';
import './Flex.css';

export interface FlexProps extends DefaultProps {
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  w100?: boolean;
  h100?: boolean;
}

const Flex: React.FC<FlexProps> = ({
  children,
  component,
  className,
  justify,
  align,
  wrap,
  direction,
  w100,
  h100,
  ...otherProps
}) => {
  const Component = makeComponent(component);
  const classes = classnames(tacti('Flex'), className, {
    [tacti(`Flex--justify-justifyCenter`)]: justify === 'center',
    [tacti(`Flex--justify-justifyBetween`)]: justify === 'between',
    [tacti(`Flex--justify-justifyAround`)]: justify === 'around',
    [tacti(`Flex--justify-justifyEvenly`)]: justify === 'evenly',
    [tacti(`Flex--justify-justifyStart`)]: justify === 'start',
    [tacti(`Flex--justify-justifyEnd`)]: justify === 'end',
    [tacti(`Flex--align-alignCenter`)]: align === 'center',
    [tacti(`Flex--align-alignBaseline`)]: align === 'baseline',
    [tacti(`Flex--align-alignStretch`)]: align === 'stretch',
    [tacti(`Flex--align-alignStart`)]: align === 'start',
    [tacti(`Flex--align-alignEnd`)]: align === 'end',
    [tacti(`Flex--wrap-wrap`)]: wrap === 'wrap',
    [tacti(`Flex--wrap-nowrap`)]: wrap === 'nowrap',
    [tacti(`Flex--wrap-wrapReverse`)]: wrap === 'wrap-reverse',
    [tacti(`Flex--direction-row`)]: direction === 'row',
    [tacti(`Flex--direction-rowReverse`)]: direction === 'row-reverse',
    [tacti(`Flex--direction-column`)]: direction === 'column',
    [tacti(`Flex--direction-columnReverse`)]: direction === 'column-reverse',
    [tacti(`Flex--w100`)]: w100,
    [tacti(`Flex--h100`)]: h100,
  });
  return (
    <Component className={classes} {...otherProps}>
      {children}
    </Component>
  );
};

Flex.propTypes = {
  justify: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'evenly']),
  align: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
  wrap: PropTypes.oneOf(['wrap', 'nowrap', 'wrap-reverse']),
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  w100: PropTypes.bool,
  h100: PropTypes.bool,
};

Flex.defaultProps = {
  wrap: 'wrap',
  direction: 'row',
};

export default Flex;
