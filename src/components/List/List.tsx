import classNames from 'classnames';
import React from 'react';
import { tacti } from '../../util/tacti';

import './List.css';

export interface Props {
  hover?: boolean;
  border?: boolean;
}

export const ProgressBar: React.FC<Props> = ({ hover = true, border = true, children }) => {
  return (
    <ul
      className={classNames(tacti('list'), {
        [tacti('list--hover')]: hover,
        [tacti('list--border')]: border,
      })}
    >
      {children}
    </ul>
  );
};

export default ProgressBar;
