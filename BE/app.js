import express from "express";
import cors from "cors";
import productRouter from "./routers/product";

const app = express();
app.use(cors());
app.use("/api", productRouter);

export const viteNodeApp = app;

/**
 * B1: npm i -y
 * B2: npm i vite vite-plugin-node -D
 * B2: npm i vite vite-plugin-node -D
 * B3: npm i express
 * B4: Tạo và truy cập file vite.config.js, chỉnh sửa appPath: "./app.js",
 * B5: Tạo file app.js, thêm code trên
 * B6: Truy cập package.json, thêm script "dev": "vite"
 * B7: Chạy npm run dev
 */
