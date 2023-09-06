import { useState } from "react"
import { SearchContext } from "./SearchContext"

export const SearchProvider = ({children}) => {

const [valueSearch, setValueSearch] = useState();



  return (
    <SearchContext.Provider value={{search: valueSearch, setValueSearch}}>
        {children}
    </SearchContext.Provider>
  )
}
