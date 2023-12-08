import { Router } from "express";
import { authenticate } from "@/middlewares/authenticate";
import { CreateEventController } from "@/controllers/events/create-event-controller";
import { CreateGroupEventController } from "@/controllers/groups/create-group-event-controller";
import { DeleteEventController } from "@/controllers/events/delete-event-controller";
import { DeleteGroupEventController } from "@/controllers/groups/delete-group-event-controller";
import { EditEventController } from "@/controllers/events/edit-event-controller";
import { EditGroupEventController } from "@/controllers/groups/edit-group-event-controller";
import { FetchEventGroupIdController } from "@/controllers/groups/fetch-Event-Groups-Id-controller";
import { FetchAllEventsController } from "@/controllers/events/fetch-all-events";
import { FetchEventController } from "@/controllers/events/fetch-event";
import { FetchEventGroupController } from "@/controllers/groups/fetch-event-groups-controller";
import { FetchAllPeopleEventGroupController } from "@/controllers/people/fetch-all-people-event-group-controller";
import { SessionController } from "@/controllers/session-controller";
import { FetchPeopleEventGroupController } from "@/controllers/people/fetch-people-event-group-controller";
import { CreatePeopleEventGroupController } from "@/controllers/people/create-people-event-group-controller";
import { EditPeopleEventGroupController } from "@/controllers/people/edit-people-event-group-controller";
import { DeletePeopleEventGroupController } from "@/controllers/people/delete-people-event-group-controller";

const sessionController = new SessionController();
const fetchAllEventsController = new FetchAllEventsController();
const fetchEventController = new FetchEventController();
const createEventController = new CreateEventController();
const editEventController = new EditEventController();
const deleteEventController = new DeleteEventController();

const fetchEventGroups = new FetchEventGroupController();
const fetchEventGroupId = new FetchEventGroupIdController();
const createGroupEvent = new CreateGroupEventController();
const editGroupEvent = new EditGroupEventController();
const deleteGroupEvent = new DeleteGroupEventController();

const fetchAllPeopleEventGroup = new FetchAllPeopleEventGroupController();
const fetchPeopleEventGroup = new FetchPeopleEventGroupController();
const createPeopleEventGroup = new CreatePeopleEventGroupController();
const editPeopleEventGroup = new EditPeopleEventGroupController();
const deletePeopleEventGroup = new DeletePeopleEventGroupController();

const adminRoutes = Router();

adminRoutes.post("/session", sessionController.handle);
adminRoutes.get("/events", authenticate, fetchAllEventsController.handle);
adminRoutes.get("/events/:id", authenticate, fetchEventController.handle);
adminRoutes.post("/events", authenticate, createEventController.handle);
adminRoutes.put("/events/:id", authenticate, editEventController.handle);
adminRoutes.delete("/events/", authenticate, deleteEventController.handle);

adminRoutes.get("/events/:id_event/groups", authenticate, fetchEventGroups.handle);
adminRoutes.get("/events/:id_events/groups/:id", authenticate, fetchEventGroupId.handle);

adminRoutes.post("/events/:id_events/groups", authenticate, createGroupEvent.handle);
adminRoutes.put("/events/:id_events/groups/:id", authenticate, editGroupEvent.handle);
adminRoutes.delete("/events/:id_events/groups", authenticate, deleteGroupEvent.handle);
adminRoutes.get("/events/:id_events/groups/:id_groups/people", authenticate, fetchAllPeopleEventGroup.handle);
adminRoutes.get("/events/:id_events/groups/:id_groups/people/:id", authenticate, fetchPeopleEventGroup.handle);
adminRoutes.post("/events/:id_events/groups/:id_groups/people", authenticate, createPeopleEventGroup.handle);
adminRoutes.put("/events/:id_events/groups/:id_groups/people", authenticate, editPeopleEventGroup.handle);
adminRoutes.delete("/events/:id_events/groups/:id_groups/people", authenticate, deletePeopleEventGroup.handle);

export { adminRoutes };
