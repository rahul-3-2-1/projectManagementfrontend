import styled from 'styled-components';
export const SingleOkrContainer=styled.div`

`;
export const SingleOKrHeader=styled.div`
.firstDiv{
    min-height:235px;
    background-color:#fff;
    margin:14px;
    padding:10px;
    box-sizing:border-box;
    // box-shadow:3px 2px 10px #ccc;
}
.firstDivChild{
    display:flex;
    // font-size:1.3rem;
    justify-content:space-between;
}
.objInfo{
    display:flex;
    justify-content:space-between;
    // height:100%;
}
.secondDiv{
    min-height:82px;
    box-sizing:border-box;
    background-color:#fff;
    margin:14px;
    // box-shadow:3px 2px 10px #ccc;
    padding:10px;
    display:flex;
    justify-content:space-between;
    h2{
        font-size:1.3rem;
    }
    >div{
        flex:1;
    }
}
`
export const Heading=styled.div`
width:${({width})=>width?"100%":"25%"};
// ${({progress})=>progress&&`padding-left:50px`}
display:flex;
flex-direction:column;
align-items:${({start})=>start?'flex-start':"center"};
justify-content:space-between;
height:100%;
`


export const Text = styled.p`

  color: ${(props) => props?.color};
`;

export const SingleOkrContent=styled.div`
background-color:#fff;
margin:14px;
// box-shadow:3px 2px 10px #ccc;
padding:10px;

`
export const TabContainer=styled.div`
display:flex;
box-sizing:border-box;
`

export const Button=styled.button`



`




export const Tab=styled.div`

margin:0px 15px;
color:grey;
padding:10px 15px;
font-weight:500;
cursor:pointer;
min-width:150px;
text-align:center;

${({active})=>active&&`
color:#045680;
 font-weight:700;
 border-bottom:4px solid #045680;

`}
`

export const Line=styled.div`
height:2px;
border-top:1px solid #ccc;

`