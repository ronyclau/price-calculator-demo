import classNames from "classnames";
import type { FC } from "react";

import type { CompProps } from "@src/types/components";

export interface Props extends CompProps {
  items: string[];
}

const CTAListing: FC<Props> = ({ className, items }) => {
  return (
    <ul
      className={classNames(
        "list-inside list-['✔'] list-image-check text-xs",
        className
      )}
    >
      {items.map((item) => (
        <li key={item} className="mt-2 first:mt-0">
          <span className="ml-4">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default CTAListing;
