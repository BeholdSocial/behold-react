import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/index.tsx",
      name: "BeholdWidget",
      fileName: (format, entryName) => {
        const extension = format === "es" ? "js" : "cjs"
        return `${entryName}.${extension}`
      },
    },
    emptyOutDir: false,
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom"],
      output: {
        banner: "'use client'",
        globals: {
          react: "React",
          "react-dom": "ReactDom",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
  },
})
