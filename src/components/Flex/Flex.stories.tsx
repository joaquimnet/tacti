/* eslint-disable react/prop-types */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Flex from './Flex';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tacti/Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

const Square = ({ color }: any) => (
  <div style={{ width: '24px', height: '24px', margin: '16px', backgroundColor: color }} />
);

export const Alignments = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Alignments.args = {
  wrap: 'wrap',
  justify: 'center',
  direction: 'row',
  align: 'center',
  style: {
    width: '100%',
    height: '100%',
  },
  children: (
    <>
      <Square color='red' />
      <Square color='red' />
      <Square color='red' />
      <Square color='red' />

      <Square color='green' />
      <Square color='green' />
      <Square color='green' />
      <Square color='green' />

      <Square color='blue' />
      <Square color='blue' />
      <Square color='blue' />
      <Square color='blue' />

      <Square color='red' />
      <Square color='red' />
      <Square color='red' />
      <Square color='red' />

      <Square color='green' />
      <Square color='green' />
      <Square color='green' />
      <Square color='green' />

      <Square color='blue' />
      <Square color='blue' />
      <Square color='blue' />
      <Square color='blue' />
    </>
  ),
};
