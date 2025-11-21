<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";
>>>>>>> c793f43 ([feat] 절대 경로 설정)

export default defineConfig({
<<<<<<< HEAD
  plugins: [react(), svgr()],
});
=======
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
>>>>>>> c793f43 ([feat] 절대 경로 설정)
