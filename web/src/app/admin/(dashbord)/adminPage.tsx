
'use client'

import { eventRoot } from "@/@types/event";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
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
  }

  useEffect(() => {
    handleEvents()
  }, [])

  return (
    <div className="rounded ">

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
            <TableHead className="w-[140px]">
              Detalhes
            </TableHead>
            <TableHead className="w-[80px]">
              Link Evento
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!isLoading && events.length > 0 &&
            events.map((item, key) => {

              return (
                <TableRow className="h-20" key={item.id}>
                  <TableCell
                    className="font-mono text-xs font-medium"
                    title={item.id}>
                    {item.id.substring(0, 12).concat('...')}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    <span className="font-semibold data-[active=true]:text-lime-500 text-rose-500"
                      data-active={item.status}
                    >
                      {item.status === true ? 'Ativado' : 'fechado'}
                    </span>

                  </TableCell>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>{item.grouped === false ? 'Não Agrupado' : 'Agrupado'}</TableCell>
                  <TableCell>
                    <Button className="rounded bg-muted-foreground text-muted font-semibold">Detalhes</Button>
                  </TableCell>
                  <TableCell>
                    <Button className="rounded">Link Evento</Button>
                  </TableCell>
                </TableRow>
              )
            })
          }


        </TableBody>

      </Table>
    </div>
  );
}
