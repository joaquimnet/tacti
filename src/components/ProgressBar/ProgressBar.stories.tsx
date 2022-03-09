import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProgressBar from './ProgressBar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tacti/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Simple = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  value: 20,
  maxValue: 100,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  value: 40,
  maxValue: 100,
  color: '#8b44e9',
};

export const WithChild = Template.bind({});
WithChild.args = {
  value: 40,
  maxValue: 100,
  color: '#1da7ca',
  children: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        color: 'white',
      }}
    >
      I am a child
    </div>
  ),
};
