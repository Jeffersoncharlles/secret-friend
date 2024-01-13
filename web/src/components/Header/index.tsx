import { PartyPopper } from "lucide-react";
import Link from "next/link";


export function Header() {

  return (
    <header className="flex items-center justify-between  p-5">
      <div className="flex items-center gap-5">
        <Link href="/admin" className="">
          <PartyPopper className="h-6 w-6" />
        </Link>
      </div>
      <div className="flex flex-col ">
        <h2 className="text-base text-primary">Amigo Secreto</h2>
        <h3 className="text-sm items-start text-muted-foreground">Dashboard</h3>
      </div>
    </header>
  );
}
