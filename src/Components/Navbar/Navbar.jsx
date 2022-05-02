import React from 'react';
import {NavbarContainer,IconContainer} from './Navbar.style';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import SettingSvg from '../../Svg/SettingSvg';

function Navbar() {
    
  return (
    <NavbarContainer>
        <IconContainer>
            <HomeOutlinedIcon className='icon'/>
        </IconContainer>
        <IconContainer>
            <SettingsOutlinedIcon className='icon'/>
        </IconContainer>
        <IconContainer>
            <HomeOutlinedIcon className='icon'/>
        </IconContainer>
        <IconContainer>
            <HomeOutlinedIcon className='icon'/>
        </IconContainer>
    </NavbarContainer>
  )
}

export default Navbar