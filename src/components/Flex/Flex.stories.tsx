/* eslint-disable react/prop-types */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Flex from './Flex';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tacti/Primitives/Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

const Square = ({ color }: any) => (
  <div style={{ width: '24px', height: '24px', margin: '16px', backgroundColor: color }} />
);

export const FlexComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlexComponent.args = {
  wrap: 'wrap',
  justify: 'center',
  direction: 'row',
  align: 'center',
  w100: true,
  h100: true,
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
