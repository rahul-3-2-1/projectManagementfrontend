import React, { useEffect, useState } from 'react';
import { TableHeaderContainer,TableHeader,TableContent,TableData } from '../Members/Members.style';
import { Line } from '../SingleProject/SingleProject.style';
import Switch from '@mui/material/Switch';
import { Request } from '../../Api/Api';
import axios from 'axios';


const getStatus=(data,req)=>{
  if(req==="R")
  return "In Review";
  return data==="N"?"Not Completed":data==="R"?"In Review":"Completed";
}
const getDate=(startDate,endDate)=>{

  let sd=new Date(startDate).toUTCString().slice(4,16);
  let ed=new Date(endDate).toUTCString().slice(4,16);

  return `${sd} to ${ed}`;

  

}
function Stages(props) {
  console.log(props);
  
  const [stagesStatus,setStagesStatus]=useState({});
  const handleOnChange=async(id,status)=>{
    // setChecked(!checked);
    try{
    const data=await axios.post(Request.sendRequest,{
      requestedBy:localStorage.getItem("user_id"),
      projectId:props?.stages[0]?.projectId,
      stageId:id,
      status:!stagesStatus[id]?"C":"N",
      companyId:localStorage.getItem('companyId')



    },{
      headers:{
        token:`${localStorage.getItem('token')}`
      }
    })
    console.log(data);
    stagesStatus[id]=!stagesStatus[id]
    setStagesStatus({...stagesStatus});
    props?.setRender(!props?.render)
    console.log(data);
    }
    catch(err)
    {
      console.log(err);
    }



  }
  useEffect(()=>{
    if(props?.stages?.length)
    {
      let temp={};
      props.stages.forEach((item)=>{
        temp[item._id]=item?.status==="N"?false:true
      })
      setStagesStatus({...temp});;
    }

  },[props])
  return (
   <div>
       <TableHeaderContainer>
           <TableHeader md>Title</TableHeader>
           <TableHeader style={{margin:"0px 5px"}} lg>Description</TableHeader>
           <TableHeader md>TimeFrame</TableHeader>
           <TableHeader sm>Weight</TableHeader>
           <TableHeader md>Status</TableHeader>
           <TableHeader sm></TableHeader>
       </TableHeaderContainer>
      
       
       {props?.stages.map((item)=>{
         return(
           <div key={item?._id}>
             <TableContent>
        <TableData md>{item?.title}</TableData>
        <TableData style={{margin:"0px 5px"}} lg>{item?.description}</TableData>
        <TableData md>{getDate(item?.startDate,item?.endDate)}</TableData>
        <TableData sm>{item?.weight}</TableData>
        <TableData md>{getStatus(item.status,item?.request)}</TableData>
        <TableData sm><Switch onChange={()=>handleOnChange(item?._id,item.status)} checked={stagesStatus[item._id]} disabled={item?.request==="R"?true:false} /></TableData>
       </TableContent>
       <Line/>
             </div>
         )
       })}
       

   </div>
  )
}

export default Stages