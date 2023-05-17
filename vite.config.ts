import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true
            }
          ]
        ]
      }
    }),
    svgr()
  ],

  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src")
    }
  }
});
