import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./componentss/Home";
import { Movieid } from "./componentss/Movieid";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/movie/:id" element={<Movieid />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
