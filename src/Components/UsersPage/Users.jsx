import React,{useState,useEffect} from 'react';
import { Line } from '../SingleProject/SingleProject.style';
import { Header,Circle,Text,UsersProjectContainer } from './User.style';
import { Avatar } from '@mui/material';
import HeaderData from '../Header/Header';
import ProjectList from './ProjectList';
import axios from 'axios';
import {Project, User} from '../../Api/Api';

const UserList = ({ allUser, filterByUser,selected }) => {
    
  
    return (
      <>
        
              <div className="userDiv"  >
                  <h3 style={{padding:"10px"}}>Users List</h3>
                  <Line style={{backgroundColor:"#ccc",height:"1px"}}/>
                  {allUser.map(item=>{
                    return(
                      <>                      <Header active={selected===item._id} onClick={()=>filterByUser(item._id)} >
                  {/* User Image  */}
                  <div >
                    
                      <Avatar />
                    
                    {/* Username /type  */}
                    
                  </div>
                  <Text className='txt' >{item.name}</Text>
  
                 
                  {/**success:bg='#099E60' */}
                </Header>
                <Line style={{backgroundColor:"#ccc"}}/>
                </>

                    )
                  })}
  
                
                             </div>
  
         
       
  
        {/* <Line /> */}
      </>)
  };


function Users() {

  const [allUsers,setAllusers]=useState([]);
  const [allProjects,setAllProjects]=useState([]);
  const [filterProjects,setFilterProjects]=useState([]);
  const [selected,setSeleted]=useState("");
  const filterByUser=(id)=>{
    setSeleted(id);
    let tmp=[];
    filterProjects.forEach((item)=>{
      if(item.members.includes(id))
      {
        tmp.push(item);
      }
    })
    setAllProjects(()=>[...tmp])
  }
  useEffect(()=>{
    const projects=async()=>{
      try{
        const dt=await axios.get(Project.getProject(localStorage.getItem("companyId"),false),{headers:{
          token:`${localStorage.getItem('token')}`
        }})
        setAllProjects(dt?.data?.data);
        setFilterProjects(dt?.data?.data);
      }
      catch(err)
      {
        console.log(err);
      }

    }

    const Users=async()=>{
      try{
        const dt=await axios.get(User.getAllUser(localStorage.getItem("companyId")),{headers:{
          token:`${localStorage.getItem('token')}`
        }})
        setAllusers(dt?.data?.data);
      }
      catch(err)
      {
        console.log(err);
      }

    }
    projects();
    Users();
  },[])

  console.log(selected);
  console.log(filterProjects);
  return (
      <>
      <HeaderData search={false}/>
      <UsersProjectContainer>
    <UserList filterByUser={filterByUser} selected={selected} allUser={allUsers}/>
    <ProjectList allProjects={allProjects}/>
    </UsersProjectContainer>
    </>
  )
}

export default Users