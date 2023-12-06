-- DropForeignKey
ALTER TABLE "EventPeople" DROP CONSTRAINT "EventPeople_id_event_fkey";

-- DropForeignKey
ALTER TABLE "events_groups" DROP CONSTRAINT "events_groups_id_event_fkey";

-- AddForeignKey
ALTER TABLE "events_groups" ADD CONSTRAINT "events_groups_id_event_fkey" FOREIGN KEY ("id_event") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventPeople" ADD CONSTRAINT "EventPeople_id_event_fkey" FOREIGN KEY ("id_event") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;
