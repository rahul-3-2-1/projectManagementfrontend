import styled from 'styled-components';
export const ProjectBoxContainer=styled.div`
width:300px;

box-shadow:1px 3px 10px #ccc;
position:relative;

border-radius:25px;
padding:15px 10px;
margin:10px 20px;
cursor:pointer;
transition:0.3s;
&:hover{

transform:scale(1.08);
}



.backColor{
    // background-color:pink;
    border-radius:25px;
    position:absolute;
    opacity:0.3;
    

   
    top:0;
    bottom:0;
    right:0;
    left:0;

}

`

export const ProgressContainer=styled.div`

`
export const Progress=styled.div`
position:absolute;
top:0;
left:0;
bottom:0;
background-color:${({color})=>color};
border-radius:10px;
width:${({per})=>per}%;

`

export const Line=styled.div`
height:3px;
border-radius:3px;
margin:10px 0px;
background-color:#feffffa1;
opacity:0.5;
// margin-bottom:20px;
`