import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import SingleProject from '../SingleProject/SingleProject';

function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/project/:id' element={<SingleProject/>}/>
    </Routes>
  )
}

export default Routing