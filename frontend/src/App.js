import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Components/Homw/Home';
import Authentication from './Components/Authentication/Authentication';

export default function App() {
  

  return (
    <div className='App'>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Authentication/>}/>
      </Routes>
    </div>
  );
}
