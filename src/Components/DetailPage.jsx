import { useState, useEffect} from "react";

//helper
import {getResults} from './helpers/getResults';

export const DetailPage = () => {



  const [mediaDetail, setMediaDetail] = useState();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const query = new URLSearchParams(window.location.search)
    const mediaID = query.get('mediaID')
    const media_type = query.get('media_type')

    setIsLoading(true)
    const url = `https://api.themoviedb.org/3/${media_type}/${mediaID}?language=es-ES`
    const getData = async () => {
    const results = await getResults(url)
    console.log(results)
    setMediaDetail(results)
    setIsLoading(false)
    }
    getData()

    // const url2 = `https://api.themoviedb.org/3/${media_type}/${mediaID}/watch/

  },[]);
    
    return (
    <>
    {!isLoading &&
    <section className="mt-5">
            <article className="max-w-md sm:max-w-xl mx-auto bg-slate-800 text-slate-200 rounded-lg flex flex-col sm:flex-row items-center space-y-2 p-2 m-1">
              <img src={"https://image.tmdb.org/t/p/w200"+ mediaDetail.poster_path}  alt="poster-movie" className="rounded-xl max-w-[150px]"/>
              <div className="m-4 text-center sm:text-start">
                <h2 className="font-bold text-base sm:text-xl inline-block">{mediaDetail.title || mediaDetail.name}</h2>
                <h3 className="text-sm sm:text-base inline-block ml-2">({mediaDetail.release_date ? mediaDetail.release_date.slice(0,4) : mediaDetail.first_air_date.slice(0,4)})</h3>
                <h3 className="text-sm sm:text-base">Título original: {mediaDetail.original_title}</h3>
                <p className="text-justify text-xs mt-4">{mediaDetail.overview}</p>


              </div>
              
            </article>
      </section>}
    </>
    )
  }