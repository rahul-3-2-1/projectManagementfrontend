import React from 'react';
import Header from '../Header/Header';
import {DashboardWrapper} from './Dashboard.style';
import AllProjects from '../AllProjects/AllProjects';


function Dashboard() {
  return (
      <DashboardWrapper>
    <Header/>
    <div className='content'>
    <AllProjects/>

    </div>
    </DashboardWrapper>
  )
}

export default Dashboard