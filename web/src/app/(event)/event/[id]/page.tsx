import SearchForm from "@/components/SearchForm";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
                    <CardTitle className="text-primary font-bold leading-6  text-4xl mb-6">
                        {event.data.title}
                    </CardTitle>
                    <Separator />
                    <CardDescription className="text-sm  text-zinc-300/80">
                        {event.data.description}
                    </CardDescription>
                    {/* <p className="text-xs">{event.data.createdAt}</p> */}
                </CardHeader>
                <CardContent>
                    <SearchForm id={params.id} />
                </CardContent>
                {/* <CardFooter>
                    <p>{event.data.createdAt}</p>
                </CardFooter> */}
            </Card>
            <footer>
               Todos os direitos reservados. Criado pelo Jeffersonc.dev
            </footer>
        </main>
    );
}
