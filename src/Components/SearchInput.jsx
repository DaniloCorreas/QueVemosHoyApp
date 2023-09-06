import { useContext} from "react";
import { SearchContext } from "../context/SearchContext";
import {useNavigate} from 'react-router-dom';

export const SearchInput = () => {

const {setValueSearch} = useContext(SearchContext);

const navigate = useNavigate();

const onSearchInput = (e) => {

  const inputValue = e.target.value
  setValueSearch(inputValue)
  
  //Si el input de busqueda esta vacio, redireciona al inicio
  if(inputValue!=="") {
    navigate('/searchpage')
  } else {
    navigate('/')
  }
}

  return (

  <input className="bg-slate-200 text-slate-800 rounded-md h-7 mb-3 w-64 p-1 pl-3 text-sm text" type="text" placeholder="Busca aquí peliculas o series..." onChange={onSearchInput}/>

  )
}
