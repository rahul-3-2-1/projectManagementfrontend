import React,{useState} from 'react';
import { Line } from '../SingleProject/SingleProject.style';
import { Header,Circle,Text,UsersProjectContainer } from './User.style';
import { Avatar } from '@mui/material';
import HeaderData from '../Header/Header';
import ProjectList from './ProjectList';

const UserList = ({ allUser, filterByUser }) => {
    
  
    return (
      <>
        
              <div className="userDiv"  >
                  <h3 style={{padding:"10px"}}>Users List</h3>
                  <Line style={{backgroundColor:"#ccc",height:"1px"}}/>
  
                <Header >
                  {/* User Image  */}
                  <div >
                    
                      <Avatar />
                    
                    {/* Username /type  */}
                    
                  </div>
                  <Text className='txt' >John</Text>
  
                 
                  {/**success:bg='#099E60' */}
                </Header>
                <Line style={{backgroundColor:"#ccc"}}/>
                <Header >
                  {/* User Image  */}
                  <div >
                    
                      <Avatar />
                    
                    {/* Username /type  */}
                    
                  </div>
                  <Text className='txt' >John</Text>
  
                 
                  {/**success:bg='#099E60' */}
                </Header>
                <Line  style={{backgroundColor:"#ccc",height:"1px"}} />
                <Header >
                  {/* User Image  */}
                  <div >
                    
                      <Avatar />
                    
                    {/* Username /type  */}
                    
                  </div>
                  <Text className='txt'>John</Text>
  
                 
                  {/**success:bg='#099E60' */}
                </Header>
                <Line  style={{backgroundColor:"#ccc",height:"1px"}} />
                <Header active >
                  {/* User Image  */}
                  <div >
                    
                      <Avatar />
                    
                    {/* Username /type  */}
                    
                  </div>
                  <Text className='txt' >John</Text>
  
                 
                  {/**success:bg='#099E60' */}
                </Header>
                <Line   style={{backgroundColor:"#ccc",height:"1px"}}/>
                <Header >
                  {/* User Image  */}
                  <div >
                    
                      <Avatar />
                    
                    {/* Username /type  */}
                    
                  </div>
                  <Text className='txt' >John</Text>
  
                 
                  {/**success:bg='#099E60' */}
                </Header>
                <Line  style={{backgroundColor:"#ccc",height:"1px"}} />
              </div>
  
         
       
  
        {/* <Line /> */}
      </>)
  };


function Users() {
  return (
      <>
      <HeaderData/>
      <UsersProjectContainer>
    <UserList/>
    <ProjectList/>
    </UsersProjectContainer>
    </>
  )
}

export default Users