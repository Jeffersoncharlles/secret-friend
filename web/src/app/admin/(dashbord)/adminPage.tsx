
'use client'

import { eventRoot } from "@/@types/event";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getEvents } from "@/lib/api/admin";
import { useEffect, useState } from "react";

export interface AdminPageProps {

}


export function AdminPage(props: AdminPageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [events, setEvents] = useState<eventRoot[]>([])

  async function handleEvents() {
    setIsLoading(true)
    const data = await getEvents()
    setEvents(data)
    setIsLoading(false)

    console.log(data)
  }

  useEffect(() => {
    handleEvents()
  }, [])

  return (
    <div className="rounded border">

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[64px]">
              ID
            </TableHead>
            <TableHead className="w-[64px]">
              Status
            </TableHead>
            <TableHead className="w-[160px]">
              Title
            </TableHead>
            <TableHead className="w-[140px]">
              Grupos
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((item, key) => {
            return (
              <TableRow key={item.id}>


                <TableCell className="font-mono text-xs font-medium">{item.id}</TableCell>
                <TableCell className="text-muted-foreground">Ativo</TableCell>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>Agrupado</TableCell>
              </TableRow>
            )
          })}

        </TableBody>

      </Table>
    </div>
  );
}
