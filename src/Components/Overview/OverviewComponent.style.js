import styled from 'styled-components';

export const OverViewContainer=styled.div`

// min-height:500px;
background-color:#fff;

box-shadow:3px 1px 10px #b3afaf6b;
// z-index:100;
border-radius:20px;

box-sizing:border-box;
margin:0px 15px;
padding:20px 10px;

`

export const OverViewWrapper=styled.div`
flex:0.45;

`

export const OkrStatus=styled.div`
  flex:1;
  
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:0 8px;
  position:relative;
  font-size:1rem;
  font-weight:500;
  .bodr{
    position:absolute;
    top:5px;
    left:0;
    bottom:5px;
    border-left:1px solid grey;
   
    @media and (max-width:990px)
    {
      font-size:1.9rem;
    }
  }
  ${({first})=>!first&&`
  // border-left:1px solid gray;
  `}
 
    border-bottom:${(props)=>props.border};
`


export const UserLevelScreenContainer=styled.div`
margin-top:10px;
display:flex;
// border:1px solid red;
flex:1;
`