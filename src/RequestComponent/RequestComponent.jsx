import React,{useEffect} from 'react';
import { ModalWrapper,ModalContainer } from '../Components/Setting/Setting.style';
import { Navigate, useNavigate } from 'react-router-dom';
import {
    Detail,
    FlexContainer,
    Heading,
    NewRequestContainer,
   
   
    Button,
    
    Status,
    RequestHeading
  } from './RequestComponent.style';
  import { TableHeaderContainer,TableContent,TableData,TableHeader } from '../Components/Members/Members.style';
  import ProjectSvgComponent from '../Svg/ProjectSvgComponent';
  import { Line } from '../Components/AllProjects/ProjectBox.style';
  import CloseReqComponent from '../Svg/CloseRequestComponentsvg';
  import AddReqComponent from '../Svg/AddReuqestComponent';
  import { Request } from '../Api/Api';
  import axios from 'axios';

  const getText=(data)=>{
    return data==='C'?"Completed":"Not Completed";
  }
function RequestComponent({progress,show,setShow,isRequestNew=true,approved=false}) {
    const [requestData,setRequestData]=React.useState([]);

    const [render,setRender]=React.useState(false);
    const navigation=useNavigate();
    useEffect(()=>{
        const getData=async()=>{
            try{
                const data=await axios.get(Request.getRequestByCompany(localStorage.getItem("companyId")),{
                    headers:{
                        token:localStorage.getItem('token')
                    }
                })
                console.log(data);
                setRequestData(data?.data?.data);
            }
            catch(err)
            {
                console.log(err);
            }

        }
        getData();
    },[render])

    const handleOnclick=async(dcd,item)=>{

        let stat=item?.status;
        if(dcd!=="A")
        {
            stat=stat==="C"?"N":"C";

        }
        try{
       const dt=await axios.patch(Request.updateRequest,{
            stageId:item?.stageId._id,
            projectId:item?.projectId._id,
            status:stat,
            approve:dcd,
            requestId:item?._id
        },{
            headers:{
                token:localStorage.getItem('token')
            }
        })
        console.log(dt);
        setRender(!render)
        }
        catch(err)
        {
            console.log(err)
        }


    }
  return (
    <ModalWrapper request>
        <ModalContainer request>
            <RequestHeading>
                <div>Requests</div>
                <div onClick={()=>setShow(!show)} style={{cursor:"pointer"}}>X</div>
            </RequestHeading>
            
    {/* <Line style={{backgroundColor:"#ccc",marginBottom:"-10px"}}/> */}
    {requestData.map((item)=>{
        return(
            <>
             <NewRequestContainer>

{/* Header for request */}

<FlexContainer>
  <Heading>
    <ProjectSvgComponent style={{ marginRight: '0.5rem' }} />
   
    {item?.projectId?.title}
    
      
    
  </Heading>
  <Detail onClick={()=>navigation(`project/${item?.projectId._id}`)} style={{cursor:"pointer"}} >
    <em>View Details</em>
  </Detail>
</FlexContainer>
  <FlexContainer style={{justifyContent:"flex-start"}}>
      <div style={{fontWeight:"500"}} className='fdiv'>
      Stage
      </div>
      <div style={{fontWeight:"500"}} className='sdiv'>
      Status
      </div>
  </FlexContainer>
  
  <FlexContainer style={{justifyContent:"flex-start"}}>
      <div className='fdiv'>
      {item?.stageId?.title}
      </div>
      <div className='sdiv'>
     {getText(item?.status)}
      </div>
  </FlexContainer>
  

  <FlexContainer>
      <div style={{fontWeight:"500"}} className='fdiv'>
      Requested By
      </div>
     
      <div style={{fontWeight:"500"}} className='fdiv'>
      Email
      </div>
      <FlexContainer style={{width:"13%"}}>

      </FlexContainer>
      </FlexContainer>

   
    {/* Approve/Reject request  */}
    <FlexContainer>
    <div style={{}} className='fdiv'>
     {item?.requestedBy?.name}
      </div>
    <div style={{wordBreak:"break-word"}} className='sdiv'>
     {item?.requestedBy?.email}
      </div>
      <FlexContainer style={{alignItems:'center',width:"20%"}}>
      { item.approve==="NA"? (
        <>
          <CloseReqComponent onClick={()=>{handleOnclick("R",item)}} className='no-mr' />
          <AddReqComponent  onClick={()=>{handleOnclick("A",item)}} className='no-mr' />
        </>
       ) : (
        <Button approved={item?.approve==='A'}>
          {item?.approve==="A"?'Approved':'Rejected'}
        </Button>
      )} 
    </FlexContainer>
      </FlexContainer>
    
  

</NewRequestContainer>
<Line style={{backgroundColor:"#ccc",marginBottom:"-10px"}}/>
            </>
        )
    })}
   
    
        </ModalContainer>
    </ModalWrapper>
  )
}

export default RequestComponent