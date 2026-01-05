import type { Meta, StoryObj } from "@storybook/react-vite";

import { NavMenu, NavItem, NavList, NavLink } from "./Nav";

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
        <NavItem>
          <NavLink href="#">home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">shop</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">about</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">contact</NavLink>
        </NavItem>
      </NavList>
    </NavMenu>
  ),
  args: {},
};
