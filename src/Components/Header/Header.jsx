import React from 'react';
import { HeaderContainer,InputSearch,IconContainer } from './Header.style';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Avatar from "@mui/material/Avatar";
function Header() {
  return (
    <HeaderContainer>
      <div className='ldiv'>
        <h2>DashBoard</h2>
        <div className='inputDiv'>
        <InputSearch placeholder='Search...'/>
        <SearchOutlinedIcon className="icon"/>
        </div>
      </div>
      <div className='rdiv'>
      <IconContainer>
        <AddCircleOutlinedIcon style={{height:"35px",width:"35px",margin:"0px 8px"}}/>
      <NotificationsNoneOutlinedIcon style={{height:"35px",width:"35px",margin:"0px 8px"}}/>
      </IconContainer>
      <div className='line'></div>

      <div className='profile'>
        <Avatar style={{margin:"0px 8px"}} className="avtr"/>
        <h4 className='nm'>
          Abc
        </h4>
      </div>
      </div>

    </HeaderContainer>
  )
}

export default Header