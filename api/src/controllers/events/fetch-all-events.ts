import { FetchAllEventsService } from "@/services/events/fetch-all-events-service";
import { Request, Response } from "express";

class FetchAllEventsController {
  async handle(req: Request, res: Response) {
    const service = new FetchAllEventsService();

    const result = await service.execute();
    return res.json(result);
  }
}

export { FetchAllEventsController };
