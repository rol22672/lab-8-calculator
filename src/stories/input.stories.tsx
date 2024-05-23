import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input, { InputProps } from '../app/Input';

export default {
  title: 'Calculator/Input',
  component: Input,
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  value1: '123',
  operator: '+',
  value2: '456',
};

export const WithDecimal = Template.bind({});
WithDecimal.args = {
  value1: '123.45',
  operator: '*',
  value2: '67.89',
};
