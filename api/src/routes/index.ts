import { Router } from "express";
import { adminRoutes } from "./admin";
import { publicRoutes } from "./public";
import { reques } from "@/middlewares/req";
import { swaggerDocument, swaggerUi } from "./docs";

const routes = Router();

routes.all("*", reques);
routes.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routes.use("/admin", adminRoutes);
routes.use("/events", publicRoutes);

export { routes };
