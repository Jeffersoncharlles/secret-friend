import { CreateEventController } from '@/controllers/create-event-controller'
import { CreateGroupEventController } from '@/controllers/create-group-event-controller'
import { DeleteEventController } from '@/controllers/delete-event-controller'
import { DeleteGroupEventController } from '@/controllers/delete-group-event-controller'
import { EditEventController } from '@/controllers/edit-event-controller'
import { EditGroupEventController } from '@/controllers/edit-group-event-controller'
import { FetchEventGroupIdController } from '@/controllers/fetch-Event-Groups-Id-controller'
import { FetchAllEventsController } from '@/controllers/fetch-all-events'
import { FetchEventController } from '@/controllers/fetch-event'
import { FetchEventGroupController } from '@/controllers/fetch-event-groups-controller'
import { SessionController } from '@/controllers/session-controller'
import { authenticate } from '@/middlewares/authenticate'
import { Router } from 'express'

const sessionController = new SessionController()
const fetchAllEventsController = new FetchAllEventsController()
const fetchEventController = new FetchEventController()
const createEventController = new CreateEventController()
const editEventController = new EditEventController()
const deleteEventController = new DeleteEventController()
const fetchEventGroups = new FetchEventGroupController()
const fetchEventGroupId = new FetchEventGroupIdController()
const createGroupEvent = new CreateGroupEventController()
const editGroupEvent = new EditGroupEventController()
const deleteGroupEvent = new DeleteGroupEventController()

const adminRoutes = Router()

adminRoutes.post('/session', sessionController.handle)
adminRoutes.get('/events', authenticate, fetchAllEventsController.handle)
adminRoutes.get('/events/:id', authenticate, fetchEventController.handle)
adminRoutes.post('/events', authenticate, createEventController.handle)
adminRoutes.put('/events/:id', authenticate, editEventController.handle)
adminRoutes.delete('/events/', authenticate, deleteEventController.handle)

adminRoutes.get(
  '/events/:id_event/groups',
  authenticate,
  fetchEventGroups.handle,
)
adminRoutes.get(
  '/events/:id_events/groups/:id',
  authenticate,
  fetchEventGroupId.handle,
)

adminRoutes.post(
  '/events/:id_events/groups',
  authenticate,
  createGroupEvent.handle,
)
adminRoutes.put(
  '/events/:id_events/groups/:id',
  authenticate,
  editGroupEvent.handle,
)
adminRoutes.delete(
  '/events/:id_events/groups',
  authenticate,
  deleteGroupEvent.handle,
)

export { adminRoutes }
