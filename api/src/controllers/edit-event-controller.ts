import { EditEventService } from '@/services/edit-event-service'
import { Request, Response } from 'express'
import { z } from 'zod'

class EditEventController {
  async handle(req: Request, res: Response) {
    const service = new EditEventService()

    const EditEventSchema = z.object({
      id: z.string().uuid(),
      title: z.string(),
      description: z.string(),
      grouped: z.boolean().optional(),
    })

    const { title, description, grouped, id } = EditEventSchema.parse(req.body)

    const result = await service.execute({ title, description, grouped, id })
    return res.json(result)
  }
}

export { EditEventController }
