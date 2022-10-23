import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button  from './button';

export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'active'
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'disabled'
};

