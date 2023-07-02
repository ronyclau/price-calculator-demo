import type { Story } from "@ladle/react";

import CROPriceDisplay from "./index";

export default {
  title: "CRO Price Display",
  args: {
    priceInFiat: 100,
    conversionRate: 2.5,
  },
};

export const Default: Story<{
  priceInFiat: number;
  conversionRate: number;
}> = ({ priceInFiat, conversionRate }) => (
  <CROPriceDisplay priceInFiat={priceInFiat} conversionRate={conversionRate} />
);
