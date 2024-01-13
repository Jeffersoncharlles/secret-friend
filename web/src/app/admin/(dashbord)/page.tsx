import { pingAdmin } from "@/lib/api/admin";
import { redirect } from "next/navigation";


export default async function Dashboard() {
    const logged = await pingAdmin()
    if (!logged) {
        return redirect('/login')
    }

    return (
        <div>

            <h1>Hello World</h1>
        </div>
    );
}
