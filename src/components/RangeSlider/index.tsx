import classNames from "classnames";
import {
  useCallback,
  useEffect,
  useState,
  type FC,
  type FormEventHandler,
} from "react";

import type { CompProps } from "@src/types/components";

export interface Props extends CompProps {
  min?: number;
  max?: number;
  value: number;
  onChange?: (value: number) => void;
}

const RangeSlider: FC<Props> = ({
  onChange,
  value,
  className,
  max = 10,
  min = 0,
  ...restProps
}) => {
  const [isRangeFocused, setIsRangeFocused] = useState(false);
  const handleValueUpdate = useCallback<FormEventHandler<HTMLInputElement>>(
    (ev) => {
      const target = ev.currentTarget;
      if (target) {
        const newValue = parseInt(target.value, 10);
        !Number.isNaN(newValue) && onChange?.(newValue);
      }
    },
    [onChange]
  );
  const handleRangeFocus = useCallback(() => {
    setIsRangeFocused(true);
  }, []);
  const handleRangeBlur = useCallback(() => {
    setIsRangeFocused(false);
  }, []);

  useEffect(() => {
    // Clamp value when limits changed
    if (min > value) {
      onChange(min);
    } else if (max < value) {
      onChange(max);
    }
  }, [min, max, value, onChange]);

  const filledPercentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={classNames("relative h-8", className)}>
      {/* Styled range slider */}
      <div className="absolute flex h-full w-full items-center overflow-hidden">
        {/* Track */}
        <div className="h-2 w-full overflow-hidden rounded-full border-l-[20px] border-l-cyan-soft bg-blue-grayish-pale pr-4">
          {/* Active portion */}
          <div
            className="ml-4 h-full w-full transform-gpu bg-cyan-soft"
            style={{
              "--tw-translate-x": `calc(${filledPercentage - 100}% - 16px)`,
            }}
          />
        </div>
        {/* Thumb */}
        <div
          className="absolute left-4 right-4 top-0 transform-gpu"
          style={{
            "--tw-translate-x": `calc(${filledPercentage}% - 15px)`,
          }}
        >
          <div
            className={classNames(
              "h-8 w-8 rounded-full bg-cyan-strong bg-slider-thumb bg-[length:50%] bg-center bg-no-repeat",
              isRangeFocused && "brightness-90"
            )}
          />
        </div>
      </div>
      {/* Real range slider */}
      <div className="absolute flex h-full w-full items-center">
        <input
          type="range"
          className={classNames(
            "reset-range-appearance h-4 w-full appearance-none bg-transparent",
            "range-thumb-moz:h-8 range-thumb-moz:w-8 range-thumb-moz:cursor-pointer",
            "range-thumb-wk:h-8 range-thumb-wk:w-8 range-thumb-wk:cursor-pointer",
            className
          )}
          min={min}
          max={max}
          value={value}
          onInput={handleValueUpdate}
          onFocus={handleRangeFocus}
          onBlur={handleRangeBlur}
          onMouseEnter={handleRangeFocus}
          onMouseLeave={handleRangeBlur}
          {...restProps}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
