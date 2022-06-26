import styled, { css } from 'styled-components';
// import { flexCenter, flexColumn, myFlex } from '../../../utils/shared.style';
// import { sharedBox } from '../Objective/Objective.style';

export const RequestContainer = styled.div`

  
  
  
  position:relative;
  overflow-y: scroll;
  height:75vh;
  max-width:475px;
  box-sizing:border-box;
  min-height:700px;
 max-height:700px;
 
 @media (max-width:915px)
 {
   min-width:100%;
   max-width:100%;
 }
  ${({modal})=>modal&&`
  margin-right:0px;
  margin-top:0px;
  max-width: 300px;
  position:fixed;
  
  left:100%;
  transform:translateX(-100%) translateY(-50%);
  @media (max-width:768px)
  {
    left:50%;
  transform:translateX(-50%) translateY(-50%);
  }
  min-height:100vh;
  `}
  ${({modal})=>!modal&&'position:sticky; top:0;'}
  // 
 
  
`;

export const UnpinIcon=styled.div`
position:absolute;
right:10px;
top:10px;
display:flex;
align-item:center;
font-weight:500;
font-size:12px;
`;

export const TabPanel = styled.div`
  margin: 1.5rem 0 0 0;
  display:flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Tab = styled.p`
  font-size: 16px;
  cursor: pointer;
  color: ${(props) =>
    props.active ? props.theme.blueDarkSecondary : 'inherit'};
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
  text-decoration-thickness: 4px;
`;

export const RequestHeader = styled.div`
  /* margin: 1rem; */
  background: ${(props) => props.theme.greyLight2};
    display:flex;
    justify-content:center;
    align-items:center;
 
  line-height: 1.6;
  padding: 1rem 0;
  .progresscheckin{
    overflow: auto;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    border-top-right-radius:2px;
    border-bottom-right-radius:2px;
  }
`;

export const SortContainer = styled.div`
  font-size: 1.4rem;
  display:flex;
  justify-content:center;
  align-items:center;

  position:relative;
`;

export const ProgressContainer = styled.div`
  width: 12.8rem;
  height: 3px;
  border: 1px solid white;
  border-radius: 50px;
  background-color: white;
  margin-bottom: 0.5rem;
  &.progress {
  }
`;

export const Progress = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  background: ${(props) => props.theme.blueDarkSecondary};
`;

export const NewRequestContainer = styled.div`
 
  line-height: 2.5;
  padding: 6px 7px;
  border-bottom: ${(props) => `1px solid ${props.theme.greyDark1}`};
`;

export const FlexContainer = styled.div`
  
  display:flex;
  font-size:1rem;
  justify-content: space-between;
  .fdiv{
      width:35%;
      margin-right:10px;
  }
  .sdiv{
    width:35%;
  }
  .no-mr{
      cursor:pointer;
  }
`;

export const SharedSmallText = css`
  font-size: 1rem;
`;

export const Heading = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  display:flex;
  align-items: center;
`;

export const Detail = styled.p`
  ${SharedSmallText};
  text-decoration: underline;
  display:flex;
  align-items:center;
  color: #5a8fa9;
`;



export const NewReq = styled.span`
  ${SharedSmallText};
  color: ${(props) => props.theme.blueLightPrimary};
  font-weight: normal;
`;

export const Request = styled.p`
  ${SharedSmallText};
  width: 80%;
  word-break: break-word;
  font-weight: 400;
`;

export const Created = styled.div`
  
`;

export const Collaboration=styled.div`
flex:1;
`;
export const Name = styled.p`
  ${SharedSmallText}
`;

export const Button = styled.button`
  outline: none;
  padding: 5px;
  color: ${(props) =>
    props.approved
      ? `green`
      : `red`};
  border: ${(props) =>
    props.approved
      ? `1px solid green`
      : `1px solid red`};
  background: none;
  font-size: .7rem;
  cursor: pointer;
  border-radius: 5px;
  font-weight:700;
`;

export const Status = styled.p`
  ${SharedSmallText};
  color: ${(props) =>
    !props?.meta
      ? '#000'
      : props.approved
      ? ` ${props.theme.greenPrimary}`
      : `${props.theme.redPrimary}`};
`;

export const FloatingRequestComponent=styled.div`
position:fixed;
right:0;
top:180px;
transition:0.3s;
.hor{
 animation-name:example;
 animation-duration: .4s; 
  &:hover{
    // opacity:0.1;
    @keyframes example {
      0%{
        right:-90%;
        opacity:0.1
      }
      25%{
        right:-70px;
      }
      100%{
        right:0px;
        opacity:1;
      }
    }
  }
}
.hr{
  animation-name:example; 
  .animation-duration: 3s;
  &:hover{
    // opacity:0.1;
    @keyframes example {
      0%{
        // right:-90%;
        opacity:0;
      }
      25%{
        // right:-70px;
        opacity:0;
      }
      50%{
        opacity:0.6;
      }
      75%{
        opcaity:0.8
      }
      100%{
        // right:0px;
        opacity:1;
      }
    }
  }
}
&hover:{
// opacity:0.3s;
// display:block;
}
`
export const RequestWrapper=styled.div`
${({ modal }) =>
modal &&
`
position: absolute;
top:0;
right:0;
min-height:100%;
width: 100vw;
background: rgba(0,0,0,0.5);
z-index: 1000000;
display:block;
// text-align: right;

`}
${({pin})=>pin?`flex:0.3;`:``}
`;

export const ApproveModalContainer=styled.div`
position:fixed;
top:50%;
left:50%;
min-width:500px;
background-color:#fff;
box-sizing:border-box;
// border-radius:19px;
padding:20px;
height:387px;
transform:translateX(-50%) translateY(-50%);
`
export const ApproveModalContent=styled.div`
`
export const ApproveModalHeader=styled.div`
.firstDiv{
display:flex;
justify-content:space-between;
color:black;
margin-bottom:10px;
}
`

export const ApproveButtonWrapper=styled.div`
`

export const List=styled.div`
position:absolute;
top:100%;
display:${({display})=>display};
width:150px;
background-color:#fff;
box-shadow:2px 3px 10px grey;
padding:5px 0px;
.listItem{
  padding:5px 5px;
  cursor:pointer;
  &:hover{
    background-color:#cccc;
  }
}
`

export const RequestHeading=styled.div`
display:flex;
justify-content:space-between;
font-weight:500;
font-size:1.2rem;
`