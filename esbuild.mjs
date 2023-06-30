/* eslint-env node */
import { cp as fsCp } from "node:fs/promises";

// import postCssPlugin from "@deanc/esbuild-plugin-postcss";
import { commonjs } from "@hyrious/esbuild-plugin-commonjs";
import postCssPlugin from "esbuild-postcss";
import esbuild from "esbuild";

const PORT = process.env.PORT || 3000;
const isServe = !!process.env.SERVE;
const isWatch = !!process.env.WATCH;

/** @type esbuild.BuildOptions */
const config = {
  bundle: true,
  platform: "browser",
  format: "esm",
  outdir: "dist",
  outExtension: { ".js": ".mjs" },
  sourcemap: "linked",
  splitting: true,
  jsx: "automatic",
  jsxDev: isServe,
  minify: !isServe,
  entryPoints: ["src/index.tsx"],
  plugins: [postCssPlugin(), commonjs()],
  define: { _IS_DEV_: isServe ? "true" : "false" },
};

// Copy content of public directory to dist
await fsCp("public", "dist", { recursive: true });

// Build / Serve
if (isServe || isWatch) {
  const ctx = await esbuild.context(config);
  if (isServe) {
    const { host, port } = await ctx.serve({ port: PORT, servedir: "dist" });
    console.log(`Serving at port http://${host}:${port}...`);
  } else {
    console.log(`Watching for changes...`);
  }
  await ctx.watch();
} else {
  await esbuild.build(config);
}
