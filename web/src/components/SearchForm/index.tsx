'use client'

import { Input } from "@/components/ui/input"
import { searchCPF } from "@/lib/api/site"
import { maskCPF } from "@/util/mask-cpf"
import { Search } from "lucide-react"
import { useState } from "react"
import { z } from "zod"

// const inputSchema = z.object({
//   search: z.string().refine((cpf: string) => {
//     if (typeof cpf !== "string") return false;
//     cpf = cpf.replace(/[^\d]+/g, "");
//     if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
//     const cpfDigits = cpf.split("").map((el) => +el);
//     const rest = (count: number): number => {
//       return (((cpfDigits.slice(0, count - 12).reduce((soma, el, index) => soma + el * (count - index), 0) * 10) % 11) % 10);
//     };
//     return rest(10) === cpfDigits[9] && rest(11) === cpfDigits[10];
//   }, "Digite um cpf válido.")
// })

interface Props {
    id:string
}



export default function SearchForm({id }:Props) {
  const [cpfInput, setCpfInput] = useState('')


  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    const query = data.search
    // console.log(query)
    // query.catch(err => console.log(err.message))
    const results = await searchCPF(id, cpfInput)
    console.log(results)
  }

  return (
      <form onSubmit={handleSearch}>
      <div className=" flex items-center py-4 ">

        <button id="#search" type="submit" className="relative left-7 top-1 transform -translate-y-1/2 ">
          <Search className=" text-zinc-500 cursor-pointer hover:text-primary" />
        </button>
        <Input
            name="search"
            type="search"
            placeholder="Digite seu CPF"
            inputMode="numeric"
            className="max-w-sm pl-10 mb-4 rounded"
            required
            onChange={e => setCpfInput(e.target.value)}
            value={maskCPF(cpfInput)}
            id="search"
          />

      </div>
      </form>
  )
}