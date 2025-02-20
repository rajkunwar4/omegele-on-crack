import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './components/Landing';
import Room from './Room';

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/room" element={<Room/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
