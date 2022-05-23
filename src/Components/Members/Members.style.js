import styled from 'styled-components';

export const TableHeaderContainer=styled.div`

display:flex;
margin:10px 0px;

`

export const TableHeader=styled.div`

${(props)=>props.lg?`width:30%`:props.sm?`width:10%`:'width:20%'};
font-size:1.1rem;
font-weight:500;
// text-align:center;
word-break:break-all;


`

export const TableContent=styled.div`
display:flex;

${(HOVER)=>HOVER&&`

&:hover{
    background-color:#ddd;
}
`}
padding:14px 0px;


`
export const TableData=styled.div`
${(props)=>props.lg?`width:30%`:props.sm?`width:10%`:'width:20%'};
// text-align:center;
word-break:break;
word-break:break-all;

`