import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Buttons, { ButtonsProps } from './../app/Buttons';

export default {
  title: 'Calculator/Buttons',
  component: Buttons,
} as Meta;

const Template: StoryFn<ButtonsProps> = (args) => <Buttons {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleClick: (label) => alert(`Button clicked: ${label}`),
};
