import styled from 'styled-components';

export const TableHeaderContainer=styled.div`

display:flex;
margin:10px 0px;

`

export const TableHeader=styled.div`

${(props)=>props.lg?`flex:1.5`:props.sm?`flex:0.5`:'flex:1'};
font-size:1.1rem;
font-weight:500;
// text-align:center;


`

export const TableContent=styled.div`
display:flex;

padding:14px 0px;


`
export const TableData=styled.div`
${(props)=>props.lg?`flex:1.5`:props.sm?`flex:0.5`:'flex:1'};
// text-align:center;


`