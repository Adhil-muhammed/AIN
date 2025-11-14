import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    plugins: [react()],
    // define: {
    //   'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    //   'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    // },
    resolve: {
      alias: [
        // More specific aliases must come first - use array format for proper resolution
        {
          find: "@/components",
          replacement: path.resolve(__dirname, "components"),
        },
        {
          find: "@/lib",
          replacement: path.resolve(__dirname, "lib"),
        },
        {
          find: "@",
          replacement: path.resolve(__dirname, "src"),
        },
      ],
    },
  };
});
