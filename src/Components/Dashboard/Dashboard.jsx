import React,{useEffect,useState} from 'react';
import Header from '../Header/Header';
import {DashboardWrapper,Buttons} from './Dashboard.style';
import AllProjects from '../AllProjects/AllProjects';
import Request from '../Request/Request';
import OverViewComponent from '../Overview/OverViewComponent';
import axios from 'axios';
import {Project} from '../../Api/Api';
import RequestComponent from '../../RequestComponent/RequestComponent';
import RequestHoverComponent from '../../Svg/ShowRequestComponent';

import RequestFloatingComponent from '../../Svg/RequestFloating';

function Dashboard() {
  const [allProjects,setAllProjects]=useState([]);
  const [allProjectsFilter,setAllProjectsFilter]=useState([]);
  const [show,setShow]=useState(false);
  const [val,setVal]=useState("");
  const [hover,setHover]=useState(false);
  
  useEffect(()=>{
    const project=async()=>{
      try{
      const dt=await axios.get(Project.getProject(localStorage.getItem("companyId")),{
      headers:{
        token:`${localStorage.getItem('token')}`
      }
    })
    setAllProjects(dt.data.data);
    setAllProjectsFilter(dt.data.data);
  }
  catch(err)
  {
    console.log(err);
  }   
}
project();
  },[])

  useEffect(()=>{
    let tmp=[];
    if(val!=="")
    {
    allProjects.forEach(item=>{
      if(item?.title?.toLowerCase().includes(val.toLowerCase())||item?.category?.toLowerCase().includes(val.toLowerCase()))
      tmp.push(item);
    });
    }
    else{
      tmp=[...allProjectsFilter];
    }
    setAllProjects(tmp);
  },[val])
  return (
      <DashboardWrapper>
    <Header val={val} setVal={setVal}/>
    <div className='content'>
      <OverViewComponent allProjects={allProjects}/>
    <AllProjects allProjects={allProjects}/>
    {/* <Request/> */}
    <Buttons>
   {!hover? <RequestFloatingComponent hover={hover} setHover={setHover}  />:
   <RequestHoverComponent show={show} setShow={setShow} hover={hover} setHover={setHover}/>}
   </Buttons>

    {show&&<RequestComponent show={show} setShow={setShow}/>}
    </div>
    </DashboardWrapper>
  )
}

export default Dashboard