import { CreateEventService } from "@/services/events/create-event-service";
import { Request, Response } from "express";
import { z } from "zod";

class CreateEventController {
  async handle(req: Request, res: Response) {
    const service = new CreateEventService();

    const createEventSchema = z.object({
      title: z.string(),
      description: z.string(),
      grouped: z.boolean().optional(),
    });

    const { title, description, grouped } = createEventSchema.parse(req.body);

    const result = await service.execute({ title, description, grouped });
    return res.json(result);
  }
}

export { CreateEventController };
