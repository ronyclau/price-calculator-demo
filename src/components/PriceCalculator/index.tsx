import classNames from "classnames";
import { useMemo, useState, type FC } from "react";

import { AVAILABLE_RATES, YEARLY_DISCOUNT } from "@src/constants/calculator";
import CROPriceDisplayContainer from "@src/containers/CROPriceDisplayContainer";
import type { PropsWithClassName } from "@src/types/components";

import RangeSlider from "../RangeSlider";
import ToggleButton from "../ToggleButton";

const PriceCalculator: FC<PropsWithClassName> = ({ className }) => {
  const [rateIndex, updateRateIndex] = useState(
    Math.floor(AVAILABLE_RATES.length / 2)
  );
  const [isBilledYearly, updateIsBilledYearly] = useState(false);
  const rate = useMemo(() => AVAILABLE_RATES[rateIndex], [rateIndex]);
  const effectiveRate = useMemo(
    () => rate.rate * (isBilledYearly ? 1 - YEARLY_DISCOUNT : 1),
    [isBilledYearly, rate]
  );

  return (
    <div
      className={classNames(
        "grid-areas-calculator-top grid items-center justify-between gap-x-4 gap-y-1 px-8 pb-8 pt-10",
        className
      )}
    >
      <span className="uppercase tracking-widest [grid-area:a]">
        {rate.pv} pageviews
      </span>
      <div className="flex items-center justify-end [grid-area:b]">
        <span className="text-3xl font-extrabold text-blue-desat-dark">
          ${effectiveRate.toFixed(2)}
        </span>
        <span>&nbsp;/ month</span>
      </div>
      <div className="flex items-center justify-end text-xs [grid-area:c]">
        <span>or&nbsp;</span>
        <CROPriceDisplayContainer priceInFiat={effectiveRate} />
        <span>&nbsp;/ month</span>
      </div>

      <RangeSlider
        className="[grid-area:d]"
        max={AVAILABLE_RATES.length - 1}
        value={rateIndex}
        onChange={(v) => {
          updateRateIndex(v);
        }}
      />
      <div className="mt-4 flex items-center gap-4 text-xs [grid-area:e]">
        <label className="flex-1 text-right">Monthly Billing</label>
        <ToggleButton
          checked={isBilledYearly}
          onChange={() => {
            updateIsBilledYearly((v) => !v);
          }}
        />
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
