import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Output, { OutputProps } from './../app/Output';

export default {
  title: 'Calculator/Output',
  component: Output,
} as Meta;

const Template: StoryFn<OutputProps> = (args) => <Output {...args} />;

export const Default = Template.bind({});
Default.args = {
  output: '123',
};

export const WithDecimal = Template.bind({});
WithDecimal.args = {
  output: '123.456',
};
