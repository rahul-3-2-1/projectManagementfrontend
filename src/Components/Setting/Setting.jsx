import React,{useState} from 'react';
import Header from '../Header/Header';
import { HistoryHeader,HistoryContainer,Button } from '../History/History.style';
import { TableHeader,TableHeaderContainer,TableContent,TableData } from '../Members/Members.style';
import { Line } from '../SingleProject/SingleProject.style';
import Switch from '@mui/material/Switch';
import DeleteIcon  from '@mui/icons-material/Delete';
import AddUser from './AddUser';
import UploadUser from './UploadUser';


const GetType=({type,setModal})=>{
    return (
        type==="add"?<AddUser setModal={setModal}/>:<UploadUser setModal={setModal}/>
    )

}


function Setting() {
    const [modal,setModal]=useState(false);
    const [type,setType]=useState("");
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
    <TableContent>
        <TableData sm>1</TableData>
        <TableData>Rahul</TableData>
        <TableData>abc@gmail.com</TableData>
        <TableData>May 5,2022</TableData>
        <TableData>Developer</TableData>
        <TableData><Switch /></TableData>
        <TableData sm><DeleteIcon color='error' style={{cursor:"pointer"}}/></TableData>
    </TableContent>
    <Line/>
    <TableContent>
    <TableData sm>2</TableData>
        <TableData>Rahul</TableData>
        <TableData>abc@gmail.com</TableData>
        <TableData>May 5,2022</TableData>
        <TableData>Developer</TableData>
        <TableData><Switch /></TableData>
        
        <TableData sm><DeleteIcon color='error' style={{cursor:"pointer"}}/></TableData>
    </TableContent>
    <Line/>
    <TableContent>
    <TableData sm>3</TableData>
        <TableData>Rahul</TableData>
        <TableData>abc@gmail.com</TableData>
        <TableData>May 5,2022</TableData>
        <TableData>Developer</TableData>
        <TableData><Switch /></TableData>
        <TableData sm><DeleteIcon color='error' style={{cursor:"pointer"}}/></TableData>
    </TableContent>
    <Line/>
    <TableContent>
    <TableData sm>4</TableData>
        <TableData>Rahul</TableData>
        <TableData>abc@gmail.com</TableData>
        <TableData>May 5,2022</TableData>
        <TableData>Developer</TableData>
        <TableData><Switch /></TableData>
        <TableData sm><DeleteIcon color='error' style={{cursor:"pointer"}}/></TableData>
    </TableContent>
    <Line/>
    <TableContent>
    <TableData sm>5</TableData>
        <TableData>Rahul</TableData>
        <TableData>abc@gmail.com</TableData>
        <TableData>May 5,2022</TableData>
        <TableData>Developer</TableData>
        <TableData><Switch /></TableData>
        <TableData sm><DeleteIcon color='error' style={{cursor:"pointer"}}/></TableData>
    </TableContent>
    <Line/>
    <TableContent>
    <TableData sm>6</TableData>
        <TableData>Rahul</TableData>
        <TableData>abc@gmail.com</TableData>
        <TableData>May 5,2022</TableData>
        <TableData>Developer</TableData>
        <TableData><Switch /></TableData>
        <TableData sm><DeleteIcon color='error' style={{cursor:"pointer"}} /></TableData>
    </TableContent>
    {modal&&<GetType setModal={setModal} type={type}/>}

    </HistoryContainer>
    </>
  )
}

export default Setting