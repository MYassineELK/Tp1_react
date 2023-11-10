import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Tp1 from './comp/Tp1';
import Tp2 from './comp/Tp2';
import Tp3 from './comp/Tp3';
import Tp4 from './comp/Tp4';
import Tp5 from './comp/Tp5';

import Navbar from './comp/Navbar';
import Notfound from './comp/Notfound';

function App() {
  return (
  <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<home/>}/>
      <Route path="/Tp1" element={<Tp1/>}/>
      <Route path="/Tp2" element={<Tp2/>}/>
      <Route path="/Tp3" element={<Tp3/>}/>
      <Route path="/Tp4" element={<Tp4/>}/>
      <Route path="/Tp5" element={<Tp5/>}/>
      <Route path="*" element={<Notfound/>}/>

    </Routes>
  </div>
  );
}

export default App;
