import { useState, useEffect, useContext} from "react";
import { SearchContext } from "../context/SearchContext";
import { NavLink }from 'react-router-dom';

//helper
import {getResults} from './helpers/getResults';

export const SearchPage = () => {

  const [searchPageList, setSearchPageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const {search} = useContext(SearchContext);

  useEffect(() => {

    setIsLoading(true)
    setTimeout(() => {
      const url = `https://api.themoviedb.org/3/search/multi?query=${search||""}&include_adult=false&language=es-ES&page=1`
      const getData = async () => {
      const {results} = await getResults(url)
      const unfilteredResults = results
      const filteredResults = unfilteredResults.filter(result => result.media_type!=="person" & result.poster_path!==null)
      setSearchPageList(filteredResults);
      setIsLoading(false)
    }
    getData()
    }, 1500);

  },[search]);
  
    return (
    <section className="mt-5">
      <h3 className="mb-3 font-bold">Tu búsqueda "{search}" arrojó los siguientes resultados:</h3>
      {isLoading ? <p>Cargado...</p> :
      <div className="flex flex-row flex-wrap justify-center">
      {
     searchPageList.map((search, idx) => {
          return(
            <NavLink to={`/detail?mediaID=${search.id}&media_type=${search.media_type}`} className="w-32 bg-slate-800 text-slate-200 rounded-lg flex flex-col items-center space-y-2 p-2 m-1">
              <img src={"https://image.tmdb.org/t/p/w200"+ search.poster_path}  alt="popular-movie"/>
              <h5 className="font-semibold text-center text-xs">{search.title || search.name}</h5>
            </NavLink>
          )
        })
      }
      </div>}
    </section>
      

    )
  }