import classNames from "classnames";
import type { FC } from "react";

import type { CompProps } from "@src/types/components";

export interface Props extends CompProps {
  checked?: boolean;
  onChange: (state: boolean) => void;
}

const ToggleButton: FC<Props> = ({ checked, className, onChange }) => {
  return (
    <input
      className={classNames(
        "h-4 w-8 cursor-pointer appearance-none rounded-full bg-blue-grayish-light p-0.5 hover:bg-cyan-strong",
        "before:block before:h-3 before:w-3 before:rounded-full before:bg-white before:transition-transform",
        "checked:before:translate-x-4 checked:before:transform-gpu",
        className
      )}
      type="checkbox"
      checked={checked}
      onChange={() => {
        onChange(!checked);
      }}
    />
  );
};

export default ToggleButton;
