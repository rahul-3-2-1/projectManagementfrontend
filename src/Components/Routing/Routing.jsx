import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import SingleProject from '../SingleProject/SingleProject';
import Users from '../UsersPage/Users';
import History from '../History/History';
import Setting from '../Setting/Setting';
import Login from '../Login/Login';
import { useAuth } from '../../Auth/Auth';
function Routing() {
  const {logedIn}=useAuth
  return (
    <>
    {logedIn &&<Routes>
    
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/project/:id' element={<SingleProject/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/request_history' element={<History/>}/>
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
      }
      </>
  )
}

export default Routing