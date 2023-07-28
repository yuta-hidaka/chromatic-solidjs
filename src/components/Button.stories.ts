import type { Meta, StoryObj } from "storybook-solidjs";

import { Button } from "./Button";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    variant: "primary",
    children: "ボタン",
  },
};

export const Basic: Story = {};

export default meta;
