import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { peerDependencies } from "./package.json";

export default defineConfig((options) => ({
  entry: ["src/index.tsx"],
  outDir: "dist",
  format: ["esm", "cjs"],
  sourcemap: true,
  bundle: true,
  minify: !options.watch,
  esbuildPlugins: [vanillaExtractPlugin()],
  external: [...Object.keys(peerDependencies)],
  clean: !options.watch,
}));
