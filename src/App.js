import React from 'react';
import { HashRouter,Routes, Route } from 'react-router-dom';
import './App.scss'

import Home from "./components/Home/Home";
import AddProperty from './components/AddProperty/AddProperty';
import DeleteProperty from './components/DeleteProperty/DeleteProperty.jsx';


function App() {

  return (
    <HashRouter >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add_property" element={<AddProperty />} />
        <Route path="/delete_property" element={<DeleteProperty />} />
      </Routes>
    </HashRouter>

  );
}

export default App;
