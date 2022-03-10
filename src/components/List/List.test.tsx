import React from 'react';
import { render } from '@testing-library/react';

import List from './List';

describe('ProgressBar', () => {
  test('renders the List component empty', () => {
    render(<List />);
  });
});
