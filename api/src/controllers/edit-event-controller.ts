import { EditEventService } from '@/services/edit-event-service'
import { Request, Response } from 'express'
import { z } from 'zod'

class EditEventController {
  async handle(req: Request, res: Response) {
    const service = new EditEventService()
    const id = z.string().parse(req.params.id)
    const EditEventSchema = z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      grouped: z.boolean().optional(),
      status: z.boolean().optional(),
    })

    const { title, description, grouped, status } = EditEventSchema.parse(
      req.body,
    )

    const result = await service.execute({
      title,
      description,
      grouped,
      id,
      status,
    })
    return res.json(result)
  }
}

export { EditEventController }
