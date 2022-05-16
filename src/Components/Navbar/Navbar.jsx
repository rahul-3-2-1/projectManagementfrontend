import React from 'react';
import {NavbarContainer,IconContainer} from './Navbar.style';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ReorderIcon from '@mui/icons-material/Reorder';
import HistoryIcon from '@mui/icons-material/History';
import { NavLink } from 'react-router-dom';


function Navbar() {
    
  return (
    <NavbarContainer>
       
        <IconContainer   animation={false} style={{marginBottom:"20px"}}>
            <ReorderIcon  className='icon' style={{height:"30px",width:"30px"}}/>
        </IconContainer>
        
        <NavLink activeClassName="active" className="link" to='/'>
        <IconContainer  className='wrapper' animation>
            <HomeOutlinedIcon  className='icon' style={{height:"30px",width:"30px"}}/>
        </IconContainer>
        </NavLink>
        <NavLink activeClassName="active" className="link" to='/users'>
        <IconContainer  className='wrapper' animation>
            <PersonOutlineIcon  className='icon' style={{height:"30px",width:"30px"}}/>
        </IconContainer>
        </NavLink>
        <NavLink activeClassName="active" className="link" to='/request_history'>
        <IconContainer className='wrapper' animation>
            <HistoryIcon  className='icon' style={{height:"30px",width:"30px"}}/>
        </IconContainer>
        </NavLink>
        <NavLink activeClassName="active" className="link" to='/setting'>
        <IconContainer className='wrapper' animation>
            <SettingsOutlinedIcon  className='icon' style={{height:"30px",width:"30px"}}/>
        </IconContainer>
        </NavLink>
        
    </NavbarContainer>
  )
}

export default Navbar