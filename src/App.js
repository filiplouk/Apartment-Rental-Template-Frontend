import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.scss'

import Home from "./components/Home/Home";
import AddProperty from './components/AddProperty/AddProperty';
import DeleteProperty from './components/DeleteProperty/DeleteProperty.jsx';


function App() {

  return (
    <BrowserRouter basename='/Intership-Project-Frontend'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add_property" element={<AddProperty />} />
        <Route path="/delete_property" element={<DeleteProperty />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
