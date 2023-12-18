'use client'

import { SearchResult } from "@/@types/search-result";
import SearchForm from "@/components/SearchForm";
import { useState } from "react";

interface Props {
  id:string
}

export default function Search({id}:Props) {
  const [matchResult, setMatchResult] = useState<SearchResult>()
    return(
      <div className="">
        <SearchForm id={id} />
      </div>
    );
}
