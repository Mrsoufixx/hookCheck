import Home from "./components/pages/Home";
import NavBar from "./components/layouts/NavBar";
import Categorie from "./components/pages/Categorie";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetail from "./components/pages/MovieDetail";

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
