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
import { FetchAllPeopleEventGroupController } from '@/controllers/fetch-all-people-event-group-controller'
import { SessionController } from '@/controllers/session-controller'
import { authenticate } from '@/middlewares/authenticate'
import { Router } from 'express'
import { FetchPeopleEventGroupController } from '@/controllers/fetch-people-event-group-controller'
import { CreatePeopleEventGroupController } from '@/controllers/create-people-event-group-controller'
import { EditPeopleEventGroupController } from '@/controllers/edit-people-event-group-controller'

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

const fetchAllPeopleEventGroup = new FetchAllPeopleEventGroupController()
const fetchPeopleEventGroup = new FetchPeopleEventGroupController()
const createPeopleEventGroup = new CreatePeopleEventGroupController()
const editPeopleEventGroup = new EditPeopleEventGroupController()

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

adminRoutes.get(
  '/events/:id_events/groups/:id_groups/people',
  authenticate,
  fetchAllPeopleEventGroup.handle,
)
adminRoutes.get(
  '/events/:id_events/groups/:id_groups/people/:id',
  authenticate,
  fetchPeopleEventGroup.handle,
)
adminRoutes.post(
  '/events/:id_events/groups/:id_groups/people',
  authenticate,
  createPeopleEventGroup.handle,
)
adminRoutes.put(
  '/events/:id_events/groups/:id_groups/people',
  authenticate,
  editPeopleEventGroup.handle,
)

export { adminRoutes }
