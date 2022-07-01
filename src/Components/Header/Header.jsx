import React,{useState} from 'react';
import { HeaderContainer,InputSearch,IconContainer } from './Header.style';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Avatar from "@mui/material/Avatar";
import AddProject from '../AddProject/AddProject';
import ProfileOptions from './ProfileOptions';
import {UploadPic} from './ProfileOptions';
import { ResetPassword } from './ProfileOptions';
function Header(props) {
  const {val,setVal,search,text,render,setRender}=props;
  const [modal,setModal]=useState(false);
  const [opacity,setOpacity]=useState(false);
  const [profile,setProfile]=useState(false);
  const [pass,setPass]=useState(false);
  return (
    <HeaderContainer>
      <div className='ldiv'>
        <h2>{search?text:""}</h2>
        {search?<div className='inputDiv'>
        <InputSearch value={val} name="search" autoComplete="off" onChange={(e)=>setVal(e.target.value.toLowerCase())} placeholder='Search...'/>
        <SearchOutlinedIcon className="icon"/>
        </div>:""}
        
      </div>
      <div className='rdiv'>
      <IconContainer>
      {localStorage.getItem("isAdmin")==="true"&&  <AddCircleOutlinedIcon onClick={()=>setModal(true)} style={{height:"35px",width:"35px",margin:"0px 8px",cursor:"pointer"}}/>}
      {/* <NotificationsNoneOutlinedIcon style={{height:"35px",width:"35px",margin:"0px 8px",cursor:"pointer"}}/> */}
      </IconContainer>
      <div className='line'></div>

      <div style={{position:"relative"}} className='profile'>
        <Avatar src={localStorage.getItem('profilePic')} alt="" onClick={()=>setOpacity(!opacity)} style={{margin:"0px 8px",cursor:"pointer"}} className="avtr"/>
        <h4 className='nm'>
          {localStorage.getItem("name")}
        </h4>
        {opacity&&<ProfileOptions profile={profile} setPass={setPass} setProfile={setProfile}/>}
      </div>
      </div>
    {modal&&<AddProject render={render} setRender={setRender} setModal={setModal}/>}
    {profile&&<UploadPic render={render} setrender={setRender} setModal={setProfile}/>}
    {pass&&<ResetPassword  render={render} setRender={setRender} setModal={setPass}/>}
   

    </HeaderContainer>
  )
}
Header.defaultProps={
  search:true,
  text:"Dashboard",
  render:false,
  setRender:()=>{}
}
export default Header;