import React from 'react';
import { render } from '@testing-library/react';

import ListItem from './ListItem';

describe('ListItem', () => {
  test('renders the ListItem component empty', () => {
    render(<ListItem>Content</ListItem>);
  });
});
