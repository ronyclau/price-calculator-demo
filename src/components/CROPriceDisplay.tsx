import classNames from "classnames";
import type { FC } from "react";

import type { CompProps } from "@src/types/components";

export interface Props extends CompProps {
  priceInFiat: number;
  conversionRate: number;
}

const CROPriceDisplay: FC<Props> = ({
  className,
  priceInFiat,
  conversionRate,
}) => (
  <div
    className={classNames("flex items-center justify-end text-xs", className)}
  >
    <span>or ~</span>
    <span>{Math.round(priceInFiat * conversionRate)} CRO</span>
    <span>&nbsp;/ month</span>
  </div>
);

export default CROPriceDisplay;
