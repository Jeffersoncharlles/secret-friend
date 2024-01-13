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
    <main className="">
      {children}
    </main>
  )
}
