import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const githubPagesBase =
  process.env.GITHUB_ACTIONS === "true" && repositoryName ? `/${repositoryName}/` : "./";

export default defineConfig({
  // GitHub Pages project sites are served from /<repo>/, not from the domain root.
  base: githubPagesBase,
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000
  }
});
