import { FetchEventController } from "@/controllers/events/fetch-event";
import { SearchPeopleCPFController } from "@/controllers/people/search-people-cpf-controller";
import { Router } from "express";

const fetchEventController = new FetchEventController();
const searchPeopleCPFController = new SearchPeopleCPFController();

const publicRoutes = Router();

publicRoutes.get("/:id", fetchEventController.handle);
publicRoutes.get("/:id_events/search", searchPeopleCPFController.handle);

export { publicRoutes };
