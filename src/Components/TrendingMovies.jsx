import { useState, useEffect} from "react";
import { NavLink }from 'react-router-dom';

//helper
import {getResults} from './helpers/getResults';

export const TrendingMovies = () => {
  
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    setIsLoading(true)
    setTimeout(() => {
      const url = 'https://api.themoviedb.org/3/trending/movie/day?language=es-ES'
      const getData = async () => {
      const {results} = await getResults(url)
      setTrendingMoviesList(results)
      setIsLoading(false)
    }
    getData()
    }, 1000);

  },[]);
    
    return (
      <section className="mt-5">
      <h3 className="mb-3 font-bold">Peliculas Tendencia en Argentina</h3>
      {isLoading && <p>Cargado...</p>}
      <div className="flex flex-row flex-wrap justify-center">
      {
        trendingMoviesList.map((movie, idx) => {
          return(
            <NavLink to={`/detail?mediaID=${movie.id}&media_type=${movie.media_type}`} key={idx} className="w-32 bg-slate-800 text-slate-200 rounded-lg flex flex-col items-center space-y-2 p-2 m-1">
              <img src={"https://image.tmdb.org/t/p/w200"+ movie.poster_path}  alt="popular-movie"/>
              <h5 className="font-semibold text-center text-xs">{movie.title || movie.name}</h5>
            </NavLink>
          )
        })
      }
      </div>
      </section>
      

    )
  }
  