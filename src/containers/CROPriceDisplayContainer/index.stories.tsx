import type { Story } from "@ladle/react";

import {
  CRORateContext,
  FETCH_ERROR,
  type CRORateContextProps,
} from "@src/contexts/CRORateContext";

import CROPriceDisplayContainer from "./index";

export default {
  title: "CRO Price Display Container",
  args: {
    priceInFiat: 200,
  },
};

export const Loading: Story<{ priceInFiat: number } & CRORateContextProps> = ({
  priceInFiat,
  usdRate,
}) => {
  return (
    <CRORateContext.Provider value={{ usdRate }}>
      <CROPriceDisplayContainer priceInFiat={priceInFiat} />
    </CRORateContext.Provider>
  );
};

export const Loaded = Loading.bind({});
Loaded.args = { usdRate: 2.5 };

export const LoadFailed = Loading.bind({});
LoadFailed.args = { usdRate: FETCH_ERROR };
