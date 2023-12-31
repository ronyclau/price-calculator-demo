import type { FC } from "react";

import CTAListing from "@src/components/CTAListing";
import PageLayout from "@src/components/PageLayout";
import PriceCalculator from "@src/components/PriceCalculator";
import { CTA_ITEMS } from "@src/constants/text";
import type { PropsWithClassName } from "@src/types/components";

const CalculatorPage: FC<PropsWithClassName> = (props) => (
  <PageLayout {...props}>
    <div className="flex w-full flex-col items-center gap-8 bg-blue-very-pale bg-calculator-pattern bg-[length:100%_45%] bg-top bg-no-repeat p-5 text-blue-grayish shadow md:gap-16 md:pb-20 md:pt-10">
      <div className="flex flex-col items-center gap-2 bg-circle-pattern bg-contain bg-center bg-no-repeat py-8">
        <h1 className="text-xl font-extrabold text-blue-desat-dark">
          Simple, traffic-based pricing
        </h1>
        <h2 className="text-center text-xs">
          <span>Sign-up for out 30-day trial.</span>
          <span className="sm:block">No credit card required.</span>
        </h2>
      </div>
      <div className="flex w-full max-w-md flex-col rounded bg-white text-sm shadow">
        <PriceCalculator />
        <div className="flex flex-col items-center justify-between gap-8 border-t px-8 py-6 md:flex-row">
          <CTAListing items={CTA_ITEMS} />
          <button className="rounded-full bg-blue-dark px-8 py-2 text-xs font-bold text-blue-pale hover:text-white">
            Start my trial
          </button>
        </div>
      </div>
    </div>
  </PageLayout>
);

export default CalculatorPage;
