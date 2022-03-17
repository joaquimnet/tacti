import React from 'react';
import { render } from '@testing-library/react';

import Box from './Box';

describe('Box', () => {
  test('renders the Box component', () => {
    render(<Box>I&apos;m a Box!</Box>);
  });
});
