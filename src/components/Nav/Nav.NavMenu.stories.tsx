import type { Meta, StoryObj } from "@storybook/react-vite";

import { NavMenu, NavItem, NavList } from "./Nav";

const meta = {
  component: NavMenu,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NavMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <NavMenu {...args}>
      <NavList>
        <NavItem>home</NavItem>
        <NavItem>shop</NavItem>
        <NavItem>about</NavItem>
        <NavItem>contact</NavItem>
      </NavList>
    </NavMenu>
  ),
  args: {},
};
