import React,{useState,useEffect} from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Members,SearchContainer,SearchComponent,MembersBox} from './AddProject..style';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { TableHeaderContainer,TableHeader,TableContent,TableData } from "../Members/Members.style";
import { Line } from "../SingleProject/SingleProject.style";
import CrossComponentSvg from "../../Svg/CrossComponentSvg";


function RenderMember(props){
  const {data,handleRemove}=props;
  console.log(data);
  return(
  <MembersBox>
    <div onClick={()=>handleRemove(data._id)} className="cross">
      <CrossComponentSvg />
    </div>
    {data.name}
  </MembersBox>
  )

}


function AddMembers(props) {
  const { setType,setMembers,members, setModal,allUsers ,membersId,setMembersId} = props;
  const [users,setUsers]=useState([]);
  const [val,setVal]=useState("");
  
  useEffect(()=>{
    
    let tmp=[];

    allUsers.forEach(item=>{
      if(item.email.toLowerCase().includes(val.toLowerCase())||item.name.toLowerCase().includes(val.toLowerCase()))
      tmp.push(item);
    });
    setUsers(()=>tmp);

  },[val])
  const handleRemove=(id)=>{

    setMembersId(membersId.filter((item)=>item!==id));
    setMembers(members.filter(item=>item._id!==id))

  }

  const handleAdd=(val)=>{
    if(!membersId.includes(val._id))
    {
    setMembers([...members,val]);
      setMembersId([...membersId,val._id])
  }
  }
  const getColor=(id)=>{
    if(membersId.includes(id))
    {
      return "#ccc";
    }
    return "";
  }
  return (
    <>
      <div className="fDiv">
        <ArrowBackIcon
          onClick={() => setType("")}
          style={{ color: "grey", cursor: "pointer" }}
        />
        <h3 style={{ cursor: "pointer" }} onClick={() => setModal(false)}>
          𐤕
        </h3>
      </div>
      <div className="fDiv">
        <h3>Members</h3>
      </div>
      <Members>
      {
        members.map(item=>{
            return(
              <RenderMember handleRemove={handleRemove} data={item}/>
            )
        })
      }
      </Members>
      <SearchContainer>

        <SearchOutlinedIcon className="icon"/>
        <SearchComponent value={val} onChange={(e)=>setVal(e.target.value)} placeholder="Search..."/>

        
      </SearchContainer>
      
      <TableHeaderContainer>
           <TableHeader style={{width:"30%",padding:"0px 3px"}} md>Name</TableHeader>
           <TableHeader style={{width:"50%",padding:"0px 3px"}} lg>Email</TableHeader>
           <TableHeader style={{width:"20%",padding:"0px 3px"}} md> Role</TableHeader>
       
          
       </TableHeaderContainer>
       
       <div className="result">
         {
           users.map((item)=>{
             return(
              <TableContent onClick={()=>handleAdd(item)}   HOVER style={{cursor:"pointer",backgroundColor:`${getColor(item._id)}`}}>
           <TableData  style={{width:"30%",padding:"0px 3px"}} md>{item.name}</TableData>
           <TableData   style={{width:"50%",padding:"0px 3px"}} lg>{item.email}</TableData>
           <TableData style={{width:"20%",padding:"0px 3px"}} md>{item.Admin}</TableData>
        

       </TableContent>
             )
           })
         }
       
       
       
       </div>
       
       
    </>
  );
}

export default AddMembers;
