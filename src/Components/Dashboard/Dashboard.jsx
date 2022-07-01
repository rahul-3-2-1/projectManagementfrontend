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
  const [render,setRender]=useState(false);
  
  useEffect(()=>{
    const project=async()=>{
      try{
        let str="";
        if(localStorage.getItem("isAdmin")==="true")
        {
          str=Project.getProject(localStorage.getItem("companyId"));
        }
        else
        {
          str=Project.getProjectByUserId(localStorage.getItem("user_id"));
        }
        
      const dt=await axios.get(str,{
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
  },[render])


  useEffect(()=>{
    let tmp=[];
    if(val!=="")
    {
    allProjectsFilter.forEach(item=>{
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
    <Header render={render} setRender={setRender} val={val} setVal={setVal}/>
    <div className='content'>
      <OverViewComponent allProjects={allProjects}/>
    <AllProjects render={render} setRender={setRender} allProjects={allProjects}/>
    {/* <Request/> */}
    <Buttons>
      {localStorage.getItem("isAdmin")==="true"&&<>
   {!hover? <RequestFloatingComponent hover={hover} setHover={setHover}  />:
   <RequestHoverComponent show={show} setShow={setShow} hover={hover} setHover={setHover}/>}</>}
   </Buttons>

    {localStorage.getItem("isAdmin")==="true"&&show&&<RequestComponent show={show} setShow={setShow}/>}
    </div>
    </DashboardWrapper>
  )
}

export default Dashboard