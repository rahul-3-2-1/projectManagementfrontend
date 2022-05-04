import React from 'react';
import Header from '../Header/Header';
import {DashboardWrapper} from './Dashboard.style';
import AllProjects from '../AllProjects/AllProjects';
import Request from '../Request/Request';
import OverViewComponent from '../Overview/OverViewComponent';


function Dashboard() {
  return (
      <DashboardWrapper>
    <Header/>
    <div className='content'>
      <OverViewComponent/>
    <AllProjects/>
    {/* <Request/> */}

    </div>
    </DashboardWrapper>
  )
}

export default Dashboard