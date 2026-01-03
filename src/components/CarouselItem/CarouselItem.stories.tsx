import type { Meta, StoryObj } from "@storybook/react-vite";

import CarouselItem from "./CarouselItem";

const meta = {
  component: CarouselItem,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof CarouselItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
