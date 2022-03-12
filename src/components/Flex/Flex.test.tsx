import React from 'react';
import { render } from '@testing-library/react';

import Flex from './Flex';

describe('Flex', () => {
  test('renders the Flex component', () => {
    render(
      <Flex
        wrap='wrap'
        justify='center'
        direction='row'
        align='center'
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        Test
      </Flex>,
    );
  });
  test('renders the Flex component with custom tag', () => {
    render(
      <Flex
        wrap='wrap'
        justify='center'
        direction='row'
        align='center'
        component='section'
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        Test
      </Flex>,
    );
  });
});
