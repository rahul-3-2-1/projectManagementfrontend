import styled from "styled-components";

export const NavbarContainer=styled.div`
display:flex;
flex-direction:column;
height:100vh;
padding:0px 13px;



position:sticky;
top:0;
.active{
    .wrapper{
        transition:0.5s;
    background-color:black;}
    
    .icon{
        color:#fff;
        transition:0.3s;
    }

    }

}
.link{
    text-decoration:none;
    color:black;
}

`
export const IconContainer=styled.div`
margin:10px 0px;
// height:50px;
// width:50px;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
transition:0.3s;
padding:10px;


&:hover{
    cursor:pointer;
   
    ${({animation})=>animation&&`
    
    transition:0.5s;
    background-color:black;
    
    .icon{
        color:#fff;
        transition:0.3s;
    }`}
   
}


`