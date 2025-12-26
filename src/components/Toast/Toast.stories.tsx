import type { Meta, StoryObj } from '@storybook/react';
import { Toast, type ToastProps } from './Toast';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    type: { control: 'select', options: ['success', 'error'] },
    message: { control: 'text' },
    duration: {control: 'select', options: [3000, 5000, 8000]},
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

const Template = (args: ToastProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div style={{ height: '200px' }}>
      <button 
        onClick={handleOpen}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Show Toast
      </button>

      <AnimatePresence>
        {isOpen && (
          <Toast 
            {...args} 
            onClose={handleClose} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export const Error: Story = {
  render: (args) => <Template {...args} />,
  args: {
    type: 'error',
    message: 'Something went wrong!',
    duration: 3000,
  },
};

export const Success: Story = {
  render: (args) => <Template {...args} />,
  args: {
    type: 'success',
    message: 'Great job!',
    duration: 3000,
  },
};
