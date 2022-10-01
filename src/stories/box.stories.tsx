import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Box from '../box';

export default {
  title: 'Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: { _: '8rem', lg: '12rem' },
  height: { _: '8rem', lg: '12rem' },
  fontSize: 'xl',
  fontWeight: 'semibold',
  border: '1px solid var(--ds-colors-separator-default)',
  borderRadius: 'md',
  color: 'black',
  backgroundColor: 'gray.4',
  boxShadow: 'md',
  children: 'Gray 4',
};
