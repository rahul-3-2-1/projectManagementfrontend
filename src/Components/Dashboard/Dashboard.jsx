import React from 'react';
import Header from '../Header/Header';
import {DashboardWrapper} from './Dashboard.style';
import AllProjects from '../AllProjects/AllProjects';
import Request from '../Request/Request';


function Dashboard() {
  return (
      <DashboardWrapper>
    <Header/>
    <div className='content'>
    <AllProjects/>
    <Request/>

    </div>
    </DashboardWrapper>
  )
}

export default Dashboard