import React from 'react';
import { render } from '@testing-library/react';

import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  test('renders the ProgressBar component', () => {
    render(<ProgressBar value={20} maxValue={100} />);
  });
  test('renders the ProgressBar component with color', () => {
    render(<ProgressBar value={20} maxValue={100} color='#ff0000' />);
  });
  test('renders the ProgressBar component with children', () => {
    render(
      <ProgressBar value={20} maxValue={100}>
        {20 + '%'}
      </ProgressBar>,
    );
  });
  test('renders the ProgressBar component with color and children', () => {
    render(
      <ProgressBar value={20} maxValue={100} color='#ff0000'>
        {20 + '%'}
      </ProgressBar>,
    );
  });
});
