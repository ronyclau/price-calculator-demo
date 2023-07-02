import type { Story } from "@ladle/react";
import { useState } from "react";

import ToggleButton from "./index";

export default {
  title: "Toggle Button",
};

export const Default: Story = () => {
  const [checked, setChecked] = useState(false);
  return <ToggleButton checked={checked} onChange={setChecked} />;
};
