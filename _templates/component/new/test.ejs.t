---
to: src/components/<%=Name%>/<%=Name%>.test.tsx
---
import React from 'react';
import { render } from '@testing-library/react';

import <%=Name%> from './<%=Name%>';

describe('<%=Name%>', () => {
  test('renders the <%=Name%> component', () => {
    render(<<%=Name%> label='Hello world!' />);
  });
});
