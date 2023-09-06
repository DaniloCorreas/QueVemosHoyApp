import { NavLink }from 'react-router-dom';
import logoImg from "../assets/logo.svg"

//Components
import { SearchInput } from './SearchInput';

export const NavBar = () => {

  return (
    <div className="bg-slate-800 text-slate-200 sticky top-0">
      <nav className="flex flex-col items-center md:flex-row justify-between max-w-5xl mx-auto">
        <NavLink to={"/"} className="flex flex-row items-center mx-2 mt-4 mb-7 font-mono">
          <img src={logoImg} alt="Logo" className="h-20 m-1 mr-3 inline md:h-8"/>
          <span className="font-bold text-2xl md:text-base">QueVemosHOY</span>
        </NavLink>
        <div className="flex flex-row flex-wrap mx-4 items-center justify-center">
          <ul className="flex flex-row space-x-3 mx-4 mb-3">
            <li>
              <NavLink to={"/"} className={({isActive}) => `hover:underline ${isActive ? 'font-bold' : '' }`}>Inicio</NavLink>
            </li>
            <li>
              <NavLink to={"/peliculas"} className={({isActive}) => `hover:underline ${isActive ? 'font-bold' : '' }`}>Peliculas</NavLink>
            </li>
            <li>
              <NavLink to={"/series"} className={({isActive}) => `hover:underline ${isActive ? 'font-bold' : '' }`}>Series</NavLink>
            </li>
          </ul>
          <SearchInput/>
       </div>
        
      </nav>      
    </div>
  )
}
