import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Box from './Box';

import '../../styles/tacti.global.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tacti/Box',
  component: Box,
  argTypes: {
    height: {
      defaultValue: 2,
      control: {
        type: 'select',
        options: [1, 2, 3, 4],
      },
    },
  }
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const ImABox = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ImABox.args = {
  height: 2,
  children: (
    <>
      <h2 style={{ fontSize: '1.3rem' }}>I&apos;m a Box</h2>
      <hr />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt dicta hic amet asperiores
        id corrupti et. Id laboriosam autem sint excepturi, doloribus, nulla, officia voluptates
        obcaecati veniam error esse incidunt!
      </p>
    </>
  ),
};
