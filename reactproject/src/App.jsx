import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDo from "./components/ToDo";
import Home from "./components/Home";
import NoteApp from "./components/NoteApp";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path='/noteapp' element={<NoteApp />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
