import "./index.css"
import {Route, Routes} from 'react-router-dom';

//Componentes
import { NavBar } from './Components/NavBar';
import { Root } from './Components/Root';
import { TrendingMovies } from "./Components/TrendingMovies";
import { TrendingTv } from "./Components/TrendingTv";
import { Footer } from './Components/Footer'
import { AboutPage } from "./Components/AboutPage";
import { ApiProviderPage } from "./Components/ApiProviderPage";
import { ContactPage } from "./Components/ContactPage";
import { SearchPage } from "./Components/SearchPage";
import { SearchProvider } from "./context/SearchProvider";
import { DetailPage } from "./Components/DetailPage";




function App() {

  return (
    <SearchProvider>
      <div className="min-w-fit mx-auto min-h-screen">
        <NavBar/>
        <div className="p-5 bg-slate-400 text-slate-800 min-h-full">
          <Routes>
            <Route path="/" element={<Root/>}></Route>
            <Route path="/peliculas" element={<TrendingMovies/>}></Route>
            <Route path="/series" element={<TrendingTv/>}></Route>
            <Route path="/detail" element={<DetailPage/>}></Route>
            <Route path="/searchpage" element={<SearchPage/>}></Route>
            <Route path="/aboutpage" element={<AboutPage/>}></Route>
            <Route path="/apiproviderpage" element={<ApiProviderPage/>}></Route>
            <Route path="/contactpage" element={<ContactPage/>}></Route>
          </Routes>
        </div>
        <Footer/>
      </div>
    </SearchProvider>
    
  )
}

export default App
