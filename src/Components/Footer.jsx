import {Link} from 'react-router-dom';
import logoImg from "../assets/logo.svg"

export const Footer = () => {
  return (
        <footer className="bg-slate-800 text-slate-200">
            <div className="flex flex-row justify-around flex-wrap max-w-md mx-auto p-3">
                <Link to={"/"} className="flex flex-col items-center mx-6 mb-4 font-mono">
                    <img src={logoImg} alt="Logo" className="h-10 m-1 inline"/>
                    <span className="font-bold text-lg md:text-base">QueVemosHOY</span>
                </Link>
                <ul className='mx-6 text-center align-text-bottom'>
                    <li><Link to={"/aboutpage"} className="text-sm hover:font-bold">Sobre Nosotros</Link></li>
                    <li><Link to={"/apiproviderpage"} className="text-sm hover:font-bold">Proveedor de la API</Link></li>
                    <li><Link to={"/contactpage"} className="text-sm hover:font-bold">Contacto</Link></li>
                </ul>
            </div>
        </footer>
  )
}
