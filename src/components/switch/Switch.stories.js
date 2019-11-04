import React from 'react';
import { action } from '@storybook/addon-actions';
import Switch from './Switch';

export default {
  component: Switch,
  title: 'Switch',
};

export const inactive = () => <Switch onChange={action('switched')} />;
export const active = () => <Switch onChange={action('switched')} checked />;
export const withLabel = () => <Switch label="favorito?" onChange={action('switched')} checked />;
