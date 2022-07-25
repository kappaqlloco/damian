import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Pokemon from "./components/Pokemon";

const App = () => {
  return (<>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Pokemon />}/>
  <Route path='/pokedex' element={<Pokemon/>}/>
  </Routes>
  </BrowserRouter>  
  </>);
}


export default App;
