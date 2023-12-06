import { FetchPeopleEventGroupService } from '@/services/fetch-people-event-group-controller'
import { Request, Response } from 'express'
import { z } from 'zod'

class FetchPeopleEventGroupController {
  async handle(req: Request, res: Response) {
    const service = new FetchPeopleEventGroupService()
    const idEvent = z.string().uuid().parse(req.params.id_events)
    const idGroups = z.string().uuid().parse(req.params.id_groups)
    const result = await service.execute({ idEvent, idGroups })
    return res.json(result)
  }
}

export { FetchPeopleEventGroupController }
