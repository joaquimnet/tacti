import React from 'react';
import { tacti } from '../../util/tacti';

import './ProgressBar.css';

export interface Props {
  value: number;
  maxValue: number;
  color?: string;
}

export const ProgressBar: React.FC<Props> = ({ value, maxValue, color = '#48ad48', children }) => {
  const percent = Math.min((value / maxValue) * 100, 100) + '%';
  return (
    <div className={tacti('progress-bar')}>
      <div
        style={{
          width: percent,
          background: color,
        }}
        className={tacti('progress-bar-fill')}
      >
        {children}
      </div>
    </div>
  );
};

export default ProgressBar;
