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
  <span className={className}>
    ~ {Math.round(priceInFiat * conversionRate)} CRO
  </span>
);

export default CROPriceDisplay;
