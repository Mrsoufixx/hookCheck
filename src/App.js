import Home from "./components/pages/home/Home";
import NavBar from "./components/layouts/NavBar";
import Categorie from "./components/pages/categories/Categorie";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetail from "./components/pages//movie/MovieDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/categorie" element={<Categorie />} />
          <Route path="/movie/:title" element={<MovieDetail/>} />
            
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
