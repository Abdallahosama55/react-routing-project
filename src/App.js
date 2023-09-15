import Navbar_comp from './components/Navbar';
import React, { Fragment } from 'react'
import { Footerr } from './components/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import Portfello from './pages/Portfello';
import NoPage from './components/NoPage';
import About from './pages/About';
function App() {
  return (
    <div className="App">



    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About/>} />
          <Route path="Portfello" element={<Portfello />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  

  
    </div>
  );
}

export default App;
