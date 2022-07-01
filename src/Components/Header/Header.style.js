import styled from "styled-components";

export const HeaderContainer=styled.div`
display:flex;
height:70px;
align-items:center;


.ldiv{
    flex:0.6;
    display:flex;
    justify-content:space-around;
   
    


}
.rdiv{
    flex:0.4;
    display:flex;
    // flex-direction:row-reverse;
    justify-content:flex-end;

    padding-right:20px;
    .line{
        height:30px;
        width:2px;
        border-top-radius:1px;
        background-color:#ccc;
        
    }

}
.inputDiv{
    width:40%;
    position:relative;
    
}
.icon{
    position:absolute;
    left:10px;
    top:50%;
    transform:translateY(-50%);
    color:#ccc;
    
}

.profile{
    display:flex;
    align-items:center;
}
.nm{
    font-size:1rem;
}
.avtr{
    height:35px;
    width:35px;
    
}

`

export const InputSearch=styled.input`

display:block;
outline:none;
background-color:#fff;
border-radius:50px;
border:none;
box-shadow:2px 3px 10px #ccc;
width:100%;

padding:10px 15px;
padding-left:35px;
font-size:1rem;
color:#797878;





`

export const IconContainer=styled.div`
display:flex;
`

export const ProfileWidth=styled.div`
min-width:250px;
padding:20px 5px;
background:#fff;
display:flex;
flex-direction:column;
align-items:center;
box-shadow:1px 2px 3px #ccc;
position:absolute;
top:100%;
right:0;
z-index:10000;
`

export const Options=styled.div`

margin: 10px 0px;
    color: cadetblue;
    font-weight: 500;
    cursor:pointer;
    &:hover{
        text-decoration:underline;
        transition:0.3s;
    }


`