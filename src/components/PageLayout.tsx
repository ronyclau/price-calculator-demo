import classNames from "classnames";
import type { FC } from "react";

import type { CompProps } from "@src/types/components";

const PageLayout: FC<CompProps> = ({ className, ...restProps }) => (
  <main
    className={classNames(
      "mx-auto flex min-h-screen max-w-7xl items-center text-blue-desat-dark",
      className
    )}
    {...restProps}
  />
);

export default PageLayout;
