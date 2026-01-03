import type { Meta, StoryObj } from "@storybook/react-vite";

import CarouselButton from "./CarouselButton";

const meta = {
  component: CarouselButton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CarouselButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onLeftClick: () => {},
    onRightClick: () => {},
  },
};
