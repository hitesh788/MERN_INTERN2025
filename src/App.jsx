import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Contact from './Components/contact';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/SignUp';
import UseState from './Components/UseState';
import UseEffect from './Components/UseEffect';
import UseEffectApi from './Components/UseEffectAPI';
import UseRef from './Components/UseRef';
import UseMemo from './Components/UseMemo';
import UseCallback from './Components/UseCallback';
import List from './Components/List';



function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery image="SECE Logo" page="Gallery" />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/use-state' element={<UseState />}></Route>
            <Route path='use-effect' element={<UseEffect />}></Route>
            <Route path='/use-api' element={<UseEffectApi />}></Route>
            <Route path='/use-Ref' element={<UseRef />}></Route>
            <Route path='/use-Memo' element={<UseMemo />}></Route>
            <Route path='/use-call' element={<UseCallback />}></Route>
            <Route path='/list' element={<List />}></Route>
          
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
