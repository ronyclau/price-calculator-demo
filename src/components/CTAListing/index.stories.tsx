import type { Story } from "@ladle/react";

import CTAListing from "./index";

export default {
  title: "CTA Listing",
  args: { items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"] },
};

export const Default: Story<{
  items: string[];
}> = ({ items }) => <CTAListing items={items} />;
