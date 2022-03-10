import React from 'react';
import { useArgs } from '@storybook/client-api';

import '../../styles/tacti.global.css';

import Modal from './index';
import Button from '../Button';

export default {
  title: 'Tacti/Modal',
  component: Modal,
  args: {
    open: false,
    onClose: () => {},
  },
};

export const Playground = ({ onClose, ...args }: any) => {
  const [{ open }, updateArgs] = useArgs();
  const handleClose = () => updateArgs({ open: !open });

  return (
    <div>
      <Button onClick={() => updateArgs({ open: !open })} label='Open Modal' />
      <Modal onClose={handleClose} {...args}>
        <h1>I am a modal!</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore enim modi ducimus id,
          accusamus vitae maiores suscipit reiciendis alias aut. Voluptatibus repellendus ut quas,
          minus obcaecati corporis sit ducimus commodi.
        </p>
        <Button onClick={handleClose} label='Close' />
      </Modal>
    </div>
  );
};
