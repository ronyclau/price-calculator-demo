import type { PropsWithChildren } from "react";

export type PropsWithClassName<P = unknown> = P & {
  className?: string;
};

export type CompProps<P = unknown> = PropsWithChildren<PropsWithClassName<P>>;
