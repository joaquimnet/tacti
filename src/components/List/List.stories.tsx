import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import List from './List';
import ListItem from './ListItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tacti/List',
  component: List,
} as ComponentMeta<typeof List>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  children: (
    <>
      <ListItem>One</ListItem>
      <ListItem>Two</ListItem>
      <ListItem>Three</ListItem>
      <ListItem>
        <a
          href='#'
          style={{
            width: '100%',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            padding: 0,
            margin: 0,
          }}
          onClick={(e: any) => e.preventDefault()}
        >
          Link 1
        </a>
      </ListItem>
      <ListItem>
        <a
          href='#'
          style={{
            width: '100%',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            padding: 0,
            margin: 0,
          }}
          onClick={(e: any) => e.preventDefault()}
        >
          Link 2
        </a>
      </ListItem>
    </>
  ),
};
