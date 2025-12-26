import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input, type InputProps } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: { control: 'select', options: ['text', 'password', 'number'] },
    value: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

const Template = (args: InputProps) => {
  const [value, setValue] = useState(args.value ?? '');
  
  
  return (
    <Input 
      {...args} 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
      onClear={() => setValue('')} 
    />
  );
};

export const Text: Story = {
  render: (args) => <Template {...args} />,
  args: {
    type: 'text',
    label: 'Standard Input',
    value: '',
  },
};

export const Password: Story = {
  render: (args) => <Template {...args} />,
  args: {
    type: 'password',
    label: 'Secret Password',
    value: 'my-password',
  },
};

export const Number: Story = {
  render: (args) => <Template {...args} />,
  args: {
    type: 'number',
    label: 'Age Selector',
    value: '25',
  },
};