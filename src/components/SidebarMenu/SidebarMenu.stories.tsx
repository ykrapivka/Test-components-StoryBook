import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SidebarMenu, type SidebarMenuProps } from './SidebarMenu';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Components/SidebarMenu',
  component: SidebarMenu,
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

const SidebarTemplate = (args: SidebarMenuProps) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  
  return (
    <div style={{ paddingLeft: '72px' }}>
      <SidebarMenu 
        {...args} 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        onOpen={() => setIsOpen(true)} 
      />
    </div>
  );
};

export const Closed: Story = {
  render: (args) => <SidebarTemplate {...args} />,
  args: {
    items: [
      { label: 'Dashboard' },
      { 
        label: 'Settings', 
        children: [
          { 
            label: 'Security',
            children: [{ label: 'Password' }, { label: '2FA' }] 
          },
          { label: 'Profile' }
        ] 
      },
      { label: 'Documentation' },
    ],
    isOpen: false,
  },
};

export const Opened: Story = {
  render: (args) => <SidebarTemplate {...args} />,
  args: {
    items: [
      { label: 'Dashboard' },
      { 
        label: 'Settings', 
        children: [
          { 
            label: 'Security',
            children: [{ label: 'Password' }, { label: '2FA' }] 
          },
          { label: 'Profile' }
        ] 
      },
      { label: 'Documentation' },
    ],
    isOpen: true,
  },
};