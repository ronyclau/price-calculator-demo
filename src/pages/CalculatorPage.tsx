import type { FC } from "react";

import PageLayout from "@src/components/PageLayout";
import type { PropsWithClassName } from "@src/types/components";

const CalculatorPage: FC<PropsWithClassName> = (props) => (
  <PageLayout {...props}>
    <div className="flex w-full flex-col items-center gap-8 bg-blue-very-pale bg-calculator-pattern bg-contain bg-top bg-no-repeat p-5 shadow md:gap-16 md:pb-20 md:pt-10">
      <div className="flex flex-col items-center gap-2 bg-circle-pattern bg-contain bg-center bg-no-repeat py-8">
        <h1 className="text-2xl font-bold">Simple, traffic-based pricing</h1>
        <h2 className="font-medium">
          Sign-up for out 30-day trial. No credit card required.
        </h2>
      </div>
      <div className="flex w-full max-w-lg flex-col rounded bg-white text-sm shadow">
        <div className="grid-areas-calculator-top grid items-center justify-between gap-x-4 gap-y-1 px-8 pb-8 pt-10">
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
          <input className="[grid-area:d]" type="range" />
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
        <div className="flex items-center justify-between gap-2 border-t px-8 py-6">
          <ul className="list-inside list-['✔'] list-image-check text-xs">
            <li className="mb-2">
              <span className="ml-4">Unlimited websites</span>
            </li>
            <li className="mb-2">
              <span className="ml-4">100% data ownership</span>
            </li>
            <li>
              <span className="ml-4">Email reports</span>
            </li>
          </ul>
          <button className="rounded-full bg-blue-dark px-8 py-2 text-xs font-bold text-blue-pale">
            Start my trial
          </button>
        </div>
      </div>
    </div>
  </PageLayout>
);

export default CalculatorPage;
