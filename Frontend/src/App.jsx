import React from 'react';
import { Routes, Route } from "react-router-dom";
import WebRouter from './WebRouter';
import SmoothScroll from './Components/Scroll/SmoothScroll.jsx';
import './App.css';
import AdminApp from './Admin/AdminApp.jsx';

function App() {
  return (
    // <SmoothScroll>
      <Routes>
        <Route path="/*" element={<WebRouter />} />
         <Route path="/admin/*"  element={<AdminApp/>}/>
      </Routes>
    //  {/* </SmoothScroll> */}
  );
}

export default App;
