import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import {BrowserRouter, Route, Routes} from "react-router-dom";

import MainPage from "./pages/MainPage.jsx";
import MovieDetail from './components/MovieDetail.jsx';
import Movies from "./pages/PopularPage.jsx"
import NowPlayingPage from './pages/NowPlayingPage.jsx';
import TopRatedPage from './pages/TopRatedPage.jsx';
import UpComing from "./pages/UpComing.jsx";
import NotFound from "./pages/NotFound.jsx";


function App() {

  return (
    
    
    <body>
<div className='root-wrap'>

  <BrowserRouter>
  <Header />
    <Routes>
      <Route path = "/" element={<MainPage />} />
      <Route path = "/Login" element={<MainPage />} />
      <Route path = "/Popular" element={<Movies />} />
      <Route path = "/Nowplay" element={<NowPlayingPage/>} />
      <Route path = "/Top" element={<TopRatedPage/>} />
      <Route path = "/Upcomming" element={<UpComing />} />
      <Route path="/movie/:movieId" element={<MovieDetail />} />
      <Route path = "/*" element={<NotFound />}/>
      </Routes>
  <Footer />
  </BrowserRouter>
  
</div>
    </body>
    
);
}


export default App
