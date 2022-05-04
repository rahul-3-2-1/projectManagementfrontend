import React from 'react';
import {NavbarContainer,IconContainer} from './Navbar.style';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import SettingSvg from '../../Svg/SettingSvg';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    
  return (
    <NavbarContainer>
        <IconContainer animation={false} style={{marginBottom:"20px"}}>
            <ReorderIcon  className='icon' style={{height:"30px",width:"30px"}}/>
        </IconContainer>
        <IconContainer animation>
            <HomeOutlinedIcon  className='icon' style={{height:"30px",width:"30px"}}/>
        </IconContainer>
        <IconContainer animation>
            <SettingsOutlinedIcon  className='icon' style={{height:"30px",width:"30px"}}/>
        </IconContainer>
        <IconContainer animation>
            <HomeOutlinedIcon  className='icon' style={{height:"30px",width:"30px"}}/>
        </IconContainer>
        <IconContainer animation>
            <HomeOutlinedIcon  className='icon' style={{height:"30px",width:"30px"}}/>
        </IconContainer>
    </NavbarContainer>
  )
}

export default Navbar