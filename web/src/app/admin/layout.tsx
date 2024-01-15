import { Header } from "@/components/Header"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Admin'
}


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className=" mx-auto  min-h-screen w-full max-w-[1600px]  gap-5 p-8">
      <Header />
      <main className=" p-3 ">
        {children}
      </main>
    </div>
  )
}
