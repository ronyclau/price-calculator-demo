import { useCallback, type FC, type FormEventHandler } from "react";

import type { CompProps } from "@src/types/components";

export interface Props extends CompProps {
  min?: number;
  max?: number;
  value?: number;
  onChange: (value: number) => void;
}

const RangeSlider: FC<Props> = ({ onChange, value, ...restProps }) => {
  const handleValueUpdate = useCallback<FormEventHandler<HTMLInputElement>>(
    (ev) => {
      const target = ev.currentTarget;
      if (target) {
        const newValue = parseInt(target.value, 10);
        !Number.isNaN(newValue) && onChange(newValue);
      }
    },
    [onChange]
  );

  return (
    <input
      type="range"
      value={value}
      onInput={handleValueUpdate}
      {...restProps}
    />
  );
};

export default RangeSlider;
