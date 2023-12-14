import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FetchEvent } from "@/lib/api/site";
import { redirect } from "next/navigation";

type Props = {
    params: {
        id:string
    }
}

export default async function  EventId({ params }: Props) {

    const event = await FetchEvent(params.id)


    if (!event || !event.data.status ) {
        return redirect('/')
    }

    return(
        <main className="text-center mx-auto max-w-lg p-5 flex flex-col h-screen justify-between">
            <Card className=" border border-zinc-700 mt-11">
                <CardHeader>
                    <CardTitle className="text-primary text-4xl">
                        {event.data.title}
                    </CardTitle>
                    <CardDescription className="text-sm mb-5">
                        {event.data.description}
                    </CardDescription>
                </CardHeader>
                <CardContent>

                </CardContent>
            </Card>
            <footer>
                Criado pelo Jeffersonc.dev
            </footer>
        </main>
    );
}
