import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Box from './Box';

import '../../styles/tacti.global.css';
import Flex from '../Flex';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tacti/Box',
  component: Box,
  argTypes: {
    height: {
      defaultValue: 2,
      control: {
        type: 'select',
        options: [0, 1, 2, 3, 4],
      },
    },
    borderSize: {
      defaultValue: 2,
      control: {
        type: 'select',
        options: [0, 1, 2, 3, 4],
      },
    },
  },
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const RegularBox = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RegularBox.args = {
  height: 2,
  borderSize: 2,
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

export const ColorfulBox = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ColorfulBox.args = {
  height: 2,
  borderSize: 2,
  style: { backgroundColor: '#5e0ea8', color: 'white' },
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

export const BunchOfBoxes = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BunchOfBoxes.args = {
  height: 2,
  borderSize: 2,
  style: { fontSize: '1.3rem', backgroundColor: '#5e0ea8', color: 'white' },
  children: (
    <>
      <Flex direction='row' justify='around' align='center'>
        <Box style={{ width: '25%', backgroundColor: '#38abcc' }}>
          <h2>I&apos;m a Box</h2>
          <hr />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt dicta hic amet
            asperiores id corrupti et. Id laboriosam autem sint excepturi, doloribus, nulla, officia
            voluptates obcaecati veniam error esse incidunt!
          </p>
        </Box>
        <Box style={{ width: '25%', backgroundColor: '#b8e4d4', color: '#1a1a1a' }}>
          <h2>I&apos;m a Box</h2>
          <hr />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt dicta hic amet
            asperiores id corrupti et. Id laboriosam autem sint excepturi, doloribus, nulla, officia
            voluptates obcaecati veniam error esse incidunt!
          </p>
        </Box>
        <Box style={{ width: '25%', backgroundColor: '#cc3838' }}>
          <h2>I&apos;m a Box</h2>
          <hr />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt dicta hic amet
            asperiores id corrupti et. Id laboriosam autem sint excepturi, doloribus, nulla, officia
            voluptates obcaecati veniam error esse incidunt!
          </p>
        </Box>
      </Flex>
    </>
  ),
};
