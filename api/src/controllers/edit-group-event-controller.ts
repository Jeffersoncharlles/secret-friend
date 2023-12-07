import { EditGroupEventService } from "@/services/edit-group-event-service";
import { Request, Response } from "express";
import { z } from "zod";

class EditGroupEventController {
  async handle(req: Request, res: Response) {
    const service = new EditGroupEventService();
    const id = z.string().uuid().parse(req.params.id);
    const idEvent = z.string().uuid().parse(req.params.id_events);
    const editGroupEventSchema = z.object({
      title: z.string().optional(),
    });

    const { title } = editGroupEventSchema.parse(req.body);

    const result = await service.execute({ idEvent, id, title });
    return res.json(result);
  }
}

export { EditGroupEventController };
