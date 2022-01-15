import esbuildServe from "esbuild-serve";

esbuildServe(
  {
    logLevel: "info",
    entryPoints: ["src/app.ts"],
    bundle: true,
    outfile: "dist/app.js",
    sourcemap: true,
  },
  { root: "dist" }
);