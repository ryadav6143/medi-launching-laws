import React from "react";
import "./App.css";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import File from "./Pages/Musat/File";

function App() {
  return (
    <>
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/c" element={<File />}></Route>
        </Routes>
      </Main>
    </>
  );
}

export default App;
