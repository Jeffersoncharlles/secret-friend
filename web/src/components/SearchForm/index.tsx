'use client'

import { Search } from "lucide-react"
import { SearchResult } from "@/@types/search-result";
import Confetti from 'react-confetti'
import { Input } from "@/components/ui/input";
import { searchCPF } from "@/lib/api/site";
import { maskCPF } from "@/util/mask-cpf";
import { useState } from "react";

interface Props {
  id:string
}

export default function SearchForm({id}:Props) {
  const [matchResult, setMatchResult] = useState<SearchResult>()
  const [loading,setLoading] = useState(true)
  const [cpfInput, setCpfInput] = useState('')


  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(false)

      const results = await searchCPF(id, cpfInput)

      if (results) {
        setMatchResult(results)
        setCpfInput('')
        setLoading(true)
        //console.log(matchResult)
      } else {
        setMatchResult(undefined)
        setLoading(true)
      }
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
      <div className=" flex items-center py-4 ">

        <button id="#search" type="submit" className="relative left-7 top-1 transform -translate-y-1/2 ">
          <Search className="text-zinc-500 cursor-pointer hover:text-primary" />
        </button>
        <Input
            name="search"
            type="search"
            placeholder="Digite seu CPF"
            inputMode="numeric"
            className="max-w-sm pl-10 mb-4 rounded"

            // maxLength={11}
            required
            onChange={e => setCpfInput(e.target.value)}
            value={maskCPF(cpfInput)}
            id="search"
          />

      </div>
      </form>
      {loading && (
        <div className="mb-6 h-42">
          {matchResult && (
            <>
              <Confetti
              numberOfPieces={1000}
              recycle={false}
              />
              <p className="text-3xl">{matchResult?.person.name}</p>
              <p className="text-2xl my-4">Parabéns, você tirou:</p>
              <p className="text-5xl my-5  text-primary  font-bold border border-zinc-800 py-6 bg-zinc-900 rounded">{matchResult?.personMatched.name}</p>
            </>
          )}

      </div>
      )}

    </div>
  )
}
