import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Admin'
}


export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[1600px]  gap-5 p-8">
      {children}
    </main>
  )
}
