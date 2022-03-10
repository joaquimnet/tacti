import React from 'react';
import { render } from '@testing-library/react';

import Modal from './Modal';

describe('Modal', () => {
  test('renders the Modal component', () => {
    render(
      <Modal open={true} onClose={() => {}}>
        <h1>I am a modal!</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore enim modi ducimus id,
          accusamus vitae maiores suscipit reiciendis alias aut. Voluptatibus repellendus ut quas,
          minus obcaecati corporis sit ducimus commodi.
        </p>
      </Modal>,
    );
  });
});
