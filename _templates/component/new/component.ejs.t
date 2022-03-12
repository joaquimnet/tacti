---
to: src/components/<%=Name%>/<%=Name%>.tsx
---
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { tacti } from '../../util/tacti';
import { DefaultProps, makeComponent } from '../../util/make-component';
import './<%=Name%>.css';

export interface <%=Name%>Props extends DefaultProps {
  label: string;
}

const <%=Name%>: React.FC<<%=Name%>Props> = ({ children, component, className, ...otherProps }) => {
  const Component = makeComponent(component);
  const classes = classnames(tacti('<%=Name%>'), className);
  return (
    <Component className={classes} {...otherProps}>
      {children}
    </Component>
  );
};

<%=Name%>.propTypes = {
  label: PropTypes.string.isRequired,
};

export default <%=Name%>;
