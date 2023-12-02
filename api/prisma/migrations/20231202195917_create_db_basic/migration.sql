-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "grouped" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events_groups" (
    "id" TEXT NOT NULL,
    "id_event" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "events_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventPeople" (
    "id" TEXT NOT NULL,
    "id_event" TEXT NOT NULL,
    "id_group" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "matched" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "EventPeople_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "events_groups" ADD CONSTRAINT "events_groups_id_event_fkey" FOREIGN KEY ("id_event") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventPeople" ADD CONSTRAINT "EventPeople_id_event_fkey" FOREIGN KEY ("id_event") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventPeople" ADD CONSTRAINT "EventPeople_id_group_fkey" FOREIGN KEY ("id_group") REFERENCES "events_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
