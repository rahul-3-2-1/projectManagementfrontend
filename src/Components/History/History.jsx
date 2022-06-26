import React,{useState,useEffect} from 'react';
import Header from '../Header/Header';
import { HistoryHeader,HistoryContainer,HistoryItem,Button } from './History.style';
import ProjectSvgComponent from '../../Svg/ProjectSvgComponent';
import { Line } from '../SingleProject/SingleProject.style';
import axios from 'axios';
import { Request } from '../../Api/Api';

const getDay=(dt)=>{

    const tm=new Date().getTime()-new Date(dt).getTime();
   

    let tmp= (tm/(24*60*60*1000))
    // console.log(tmp);
    if(tmp<1);
    {
    tmp=tmp*24;
        if(tmp<1)
        return `Just Now`;
        else
        return `${Math.ceil(tmp)} hours ago`;

    }

    // https://meet.google.com/xia-rkds-hph

    return `${Math.ceil(tmp)} days ago`;



}

function History() {
    const [historyData,setHistoryData]=useState([]);
    useEffect(()=>{
        const getData=async()=>{
            try{
                const dt=await axios.get(Request.getHistoryByCompanyId(localStorage.getItem("companyId")),{
                    headers:{
                        token:localStorage.getItem('token')
                    }
                })
                console.log(dt);
                setHistoryData(dt?.data?.data.filter(item=>item.approve!=="NA"));
            }
            catch(err)
            {
                console.log(err);
            }

        }
        
        getData();
    },[])
  return (
   <>
   <Header/>
   <HistoryHeader>
   <h2>Request History</h2>
   </HistoryHeader>
   <HistoryContainer>
       {historyData.length&&historyData.map((item)=>{
           return(
               <div key={item._id}>
                    <HistoryItem>
        <div className='projDiv'>
            <ProjectSvgComponent style={{marginRight:"10px"}}/>
           <p> {item?.projectId?.title} </p>
        </div>
        <div className='stagDiv'>
        <div className='stagName'>
            <h3>Stage Title</h3>
            <p>{item?.stageId?.title}</p>
        </div>
        <div className='Status'>
            <h3>Status</h3>
            <p style={{color:"green",fontWeight:"500"}}> {item?.status==="C"?"Completed":"Not Completed"}</p>
        </div>
        
        <div className='Request'>
            <h3>Request</h3>
            <Button color={item?.approve==="A"?"green":"red"}>{item?.approve==="A"?"Approve":"Rejected"}</Button>

        </div>
        <div>
            <p>{getDay(item?.requestedAt)}</p>
        </div>
        </div>
       </HistoryItem>
       <Line/>
               </div>
           )
       })}
      
   
   </HistoryContainer>
   </>
  )
}

export default History