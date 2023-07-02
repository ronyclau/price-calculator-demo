import type { Story } from "@ladle/react";
import { useState } from "react";

import RangeSlider from "./index";

export default {
  title: "Range Slider",
  args: {
    min: 0,
    max: 100,
  },
};

export const Default: Story<{
  min: number;
  max: number;
}> = ({ min, max }) => {
  const [value, setValue] = useState((max - min) / 2);
  return (
    <div className="flex flex-col">
      <RangeSlider
        min={min}
        max={max}
        value={value}
        onChange={(v) => {
          setValue(v);
        }}
      />
      <div>Current value: {value}</div>
    </div>
  );
};
