import React,{useState,useEffect} from 'react';
import Header from '../Header/Header';
import { HistoryHeader,HistoryContainer,Button } from '../History/History.style';
import { TableHeader,TableHeaderContainer,TableContent,TableData } from '../Members/Members.style';
import { Line } from '../SingleProject/SingleProject.style';
import Switch from '@mui/material/Switch';
import DeleteIcon  from '@mui/icons-material/Delete';
import AddUser from './AddUser';
import UploadUser from './UploadUser';
import axios from 'axios';
import {User} from "../../Api/Api";


const GetType=({type,setModal})=>{
    return (
        type==="add"?<AddUser setModal={setModal}/>:<UploadUser setModal={setModal}/>
    )

}


function Setting() {
    const [modal,setModal]=useState(false);
    const [type,setType]=useState("");
    const [allUser,setAlluser]=useState([]);
    const {filterUser,setFilterUser}=useState([]);
    useEffect(()=>{
        const getUser=async()=>{
            try{
            const dt=await axios.get(User.getAllUser(localStorage.getItem("companyId")),{
                headers:{
                    token:`${localStorage.getItem('token')}`
                }
            });
            setAlluser(dt?.data?.data);
            setFilterUser(dt?.dt?.data);
        
            }
            catch(err)
            {
                console.log(err);
            }


        }
        getUser();
    },[])
  return (
    <>
    <Header/>
    <HistoryHeader style={{display:"flex",justifyContent:"space-between"}}>
        <h2>Settings</h2>
        <div>
            <Button style={{margin:"0px 10px"}} onClick={()=>{setModal(true);setType("add")}} color="#0456804f">Add User</Button>
            <Button style={{margin:"0px 10px"}} onClick={()=>{setModal(true);setType("upload")}} color="#0456804f">Upload</Button>
        </div>
    </HistoryHeader>
    <HistoryContainer>

    <TableHeaderContainer>
        <TableHeader sm>S.no</TableHeader>
        <TableHeader>Name</TableHeader>
        <TableHeader>Email</TableHeader>
        <TableHeader>Joined At</TableHeader>
        <TableHeader>Role</TableHeader>
        <TableHeader>Admin</TableHeader>
        <TableHeader sm></TableHeader>

    </TableHeaderContainer>
    <Line/>
    {
        allUser.map((item,idx)=>{
            return(<>
                <TableContent>
        <TableData sm>{idx+1}</TableData>
        <TableData>{item.name}</TableData>
        <TableData>{item.email}</TableData>
        <TableData>{item?.joinedAt}</TableData>
        <TableData>{item?.role}</TableData>
        <TableData><Switch /></TableData>
        <TableData sm><DeleteIcon color='error' style={{cursor:"pointer"}}/></TableData>
    </TableContent>
    <Line/>
    </>
            )
        })
    }
    
    {modal&&<GetType setModal={setModal} type={type}/>}

    </HistoryContainer>
    </>
  )
}

export default Setting