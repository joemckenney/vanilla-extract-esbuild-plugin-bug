// tsup.config.ts
import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

// package.json
var peerDependencies = {
  react: "18.1.0"
};

// tsup.config.ts
var tsup_config_default = defineConfig((options) => ({
  entry: ["src/index.tsx"],
  outDir: "dist",
  format: ["esm", "cjs"],
  sourcemap: true,
  bundle: true,
  minify: !options.watch,
  esbuildPlugins: [vanillaExtractPlugin()],
  external: [...Object.keys(peerDependencies)],
  clean: !options.watch
}));
export {
  tsup_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHN1cC5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ0c3VwXCI7XG5pbXBvcnQgeyB2YW5pbGxhRXh0cmFjdFBsdWdpbiB9IGZyb20gXCJAdmFuaWxsYS1leHRyYWN0L2VzYnVpbGQtcGx1Z2luXCI7XG5pbXBvcnQgeyBwZWVyRGVwZW5kZW5jaWVzIH0gZnJvbSBcIi4vcGFja2FnZS5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygob3B0aW9ucykgPT4gKHtcbiAgZW50cnk6IFtcInNyYy9pbmRleC50c3hcIl0sXG4gIG91dERpcjogXCJkaXN0XCIsXG4gIGZvcm1hdDogW1wiZXNtXCIsIFwiY2pzXCJdLFxuICBzb3VyY2VtYXA6IHRydWUsXG4gIGJ1bmRsZTogdHJ1ZSxcbiAgbWluaWZ5OiAhb3B0aW9ucy53YXRjaCxcbiAgZXNidWlsZFBsdWdpbnM6IFt2YW5pbGxhRXh0cmFjdFBsdWdpbigpXSxcbiAgZXh0ZXJuYWw6IFsuLi5PYmplY3Qua2V5cyhwZWVyRGVwZW5kZW5jaWVzKV0sXG4gIGNsZWFuOiAhb3B0aW9ucy53YXRjaCxcbn0pKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQTtBQUNBOzs7Ozs7OztBQUdBLElBQU8sc0JBQVEsYUFBYSxDQUFDLFlBQWE7QUFBQSxFQUN4QyxPQUFPLENBQUMsZUFBZTtBQUFBLEVBQ3ZCLFFBQVE7QUFBQSxFQUNSLFFBQVEsQ0FBQyxPQUFPLEtBQUs7QUFBQSxFQUNyQixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixRQUFRLENBQUMsUUFBUTtBQUFBLEVBQ2pCLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDO0FBQUEsRUFDdkMsVUFBVSxDQUFDLEdBQUcsT0FBTyxLQUFLLGdCQUFnQixDQUFDO0FBQUEsRUFDM0MsT0FBTyxDQUFDLFFBQVE7QUFDbEIsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
