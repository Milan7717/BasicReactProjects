import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDo from "./components/ToDo";
import Home from "./components/Home";
import NoteApp from "./components/NoteApp";
import ImageCarousel from "./components/ImageCarousel";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path='/noteapp' element={<NoteApp />} /> 
          <Route path="/imagecarousel" element={<ImageCarousel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
