import styled from "styled-components";

export const NavbarContainer=styled.div`
display:flex;
flex-direction:column;
max-height:100vh;
padding:0px 16px;


position:sticky;
top:0;

`
export const IconContainer=styled.div`
margin:10px 0px;
height:45px;
width:45px;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
transition:0.3s;
.icon{
    height:46px;
}

&:hover{
    cursor:pointer;
    transition:0.5s;
    background-color:black;
    
    .icon{
        color:#fff;
        transition:0.3s;
    }
}


`