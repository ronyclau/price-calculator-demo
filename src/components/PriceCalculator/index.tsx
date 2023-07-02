import classNames from "classnames";
import type { FC } from "react";

import type { PropsWithClassName } from "@src/types/components";

const PriceCalculator: FC<PropsWithClassName> = ({ className }) => {
  return (
    <div
      className={classNames(
        "grid-areas-calculator-top grid items-center justify-between gap-x-4 gap-y-1 px-8 pb-8 pt-10",
        className
      )}
    >
      <span className="uppercase [grid-area:a]">100k pageviews</span>
      <div className="flex items-center justify-end [grid-area:b]">
        <span className="text-3xl font-bold">$16.00</span>
        <span>&nbsp;/ month</span>
      </div>
      <div className="flex items-center justify-end text-xs [grid-area:c]">
        <span>or ~</span>
        <span>32 CRO</span>
        <span>&nbsp;/ month</span>
      </div>
      <input type="range" className="[grid-area:d]" />
      <div className="mt-4 flex items-center gap-4 text-xs [grid-area:e]">
        <label className="flex-1 text-right">Monthly Billing</label>
        <input type="checkbox" />
        <div className="flex flex-1 gap-2">
          <label>Yearly Billing</label>
          <div className="rounded-md bg-red-grayish-light px-1 text-[smaller] font-bold text-red-light before:content-['-'] md:before:content-none md:after:content-['_discount']">
            25%
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
