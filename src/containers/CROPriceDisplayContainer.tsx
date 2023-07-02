import type { FC } from "react";

import CROPriceDisplay from "@src/components/CROPriceDisplay";
import { FETCH_ERROR, useCRORate } from "@src/contexts/CRORateContext";
import type { CompProps } from "@src/types/components";

export interface Props extends CompProps {
  priceInFiat: number;
}

const CROPriceDisplayContainer: FC<Props> = (props) => {
  const conversionRate = useCRORate();
  return conversionRate === undefined ? (
    <div className="flex">
      <div className="w-12 animate-pulse rounded bg-gray-200 before:text-transparent before:content-['.']" />
      &nbsp;CRO
    </div>
  ) : conversionRate === FETCH_ERROR ? (
    <div className="italic">(failed to load conversion rate)</div>
  ) : (
    <CROPriceDisplay {...props} conversionRate={conversionRate} />
  );
};

export default CROPriceDisplayContainer;
