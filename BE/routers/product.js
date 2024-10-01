import { Router } from "express";
import { getProducts } from "../controllers/product";

const productRouter = Router();
productRouter.get("/products", getProducts);

export default productRouter;
