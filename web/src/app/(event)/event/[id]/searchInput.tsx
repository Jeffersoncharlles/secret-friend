'use client'

import { SearchResult } from "@/@types/search-result"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"
type props = {
  id:string
}

export default function SearchInput({ id }: props) {
  const [matchResult, setMatchResult] = useState<SearchResult>()


  const handleSearch = async (e: React.FormEvent<HTMLFormElement>)=>{

  }

  return (
    <form onSubmit={handleSearch}  >
      <div className=" flex items-center py-4 ">

          <Search  className="relative left-7 top-1 transform -translate-y-1/2 text-zinc-500" />
          <Input
            type="search"
            placeholder="Digite seu CPF"
            className="max-w-sm pl-10 mb-4 rounded"
            required

          />

        </div>
      </form>
  )
}