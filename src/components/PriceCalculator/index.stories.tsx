import type { Story } from "@ladle/react";

import { CRORateContext } from "@src/contexts/CRORateContext";

import PriceCalculator from "./index";

export default {
  title: "Price Calculator",
  args: { rate: 2.5 },
};

export const Default: Story<{ rate: number }> = ({ rate }) => (
  <CRORateContext.Provider value={{ usdRate: rate }}>
    <PriceCalculator />
  </CRORateContext.Provider>
);
