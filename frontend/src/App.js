import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./componentss/Home";
import { Movieid } from "./componentss/Movieid";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./componentss/Footer";
import About from "./componentss/About";
import { Movie } from "./componentss/Movie";
function App() {
  return (
    <>
       <Home/>
       <About/>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Movie />} />
          <Route path="/movie/:id" element={<Movieid />}></Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
