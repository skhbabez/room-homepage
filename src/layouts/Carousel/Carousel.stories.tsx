import type { Meta, StoryObj } from "@storybook/react-vite";

import Carousel from "./Carousel";

const meta = {
  component: Carousel,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
