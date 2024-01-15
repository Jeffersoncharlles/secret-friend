

import { pingAdmin } from "@/lib/api/server";
import { redirect } from "next/navigation";
import { AdminPage } from "./adminPage";


export default async function Dashboard() {
    const logged = await pingAdmin()
    if (!logged) {
        return redirect('/login')
    }

    return (
        <div className="space-y-2.5">
            <AdminPage />
        </div>
    );
}
