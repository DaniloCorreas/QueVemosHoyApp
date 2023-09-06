import { useState, useEffect} from "react";
import { NavLink }from 'react-router-dom';

//helper
import {getResults} from './helpers/getResults';

export const TrendingAll = () => {
  
  const [trendingAllList, setTrendingAllList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    setIsLoading(true)
    setTimeout(() => {
      const url = 'https://api.themoviedb.org/3/trending/all/day?language=es-ES'
      const getData = async () => {
      const {results} = await getResults(url)
      setTrendingAllList(results)
      setIsLoading(false)
    }
    getData()
    }, 1000);

  },[]);
  
    return (
    <section className="mt-5">
      {isLoading && <p>Cargado...</p>}
      <div className="flex flex-row flex-wrap justify-center">
      {
        trendingAllList.map((trend, idx) => {
          return(
            <NavLink to={`/detail?mediaID=${trend.id}&media_type=${trend.media_type}`} key={idx} className="w-32 bg-slate-800 text-slate-200 rounded-lg flex flex-col items-center space-y-2 p-2 m-1 shadow-lg">
              <img src={"https://image.tmdb.org/t/p/w200"+ trend.poster_path}  alt="popular-movie"/>
              <h5 className="font-semibold text-center text-xs">{trend.title || trend.name}</h5>
            </NavLink>
          )
        })
      }
      </div>
    </section>
      

    )
  }