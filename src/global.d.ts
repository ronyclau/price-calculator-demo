// Ambient global definitions

declare const _IS_DEV_: boolean;

declare module "csstype" {
  interface Properties {
    [index: `--tw-${string}`]: string | number;
  }
}
