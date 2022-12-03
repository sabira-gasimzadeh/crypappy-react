
import './App.css';
import React from 'react';
import Header from './Components/Header'
import HomeRouter from './Components/HomeRouter';
import { Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <>
      <React.StrictMode>
        <Header />

        <Routes>
          <Route path='/' exact element={<HomeRouter />} />
        </Routes>
      </React.StrictMode>
    </>
  );
}

export default App;
