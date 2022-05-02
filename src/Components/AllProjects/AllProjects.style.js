import styled from "styled-components";

export const AllProjectsContainer=styled.div`

flex:1;
background-color:#fff;
box-shadow:3px 1px 10px #b3afaf6b;
// z-index:100;
border-radius:50px;

box-sizing:border-box;

// height:500px;
padding:40px 30px;


`

export const Title=styled.div`
display:flex;
justify-content:space-between;
margin:10px 0px;
${(props)=>props?.type==="progress"?`
display:flex;
flex-direction:column;
.container{
    position:relative;
    margin:10px 0px;
    height:7px;
    background-color:#ccc;
    border-radius:10px;
    overflow:hidden;

}


`:``}

.ldiv{
    display:flex;
    
    .sz{
        height:30px;
        width:30px;
    }
}
.rdiv{

    background-color:#fff;
    z-index:100;
    box-shadow:1px 2px 10px #ccc;
    padding:7px 15px;
    padding-bottom:9px;
    border-radius:20px;

}

`

export const ProjectsDetails=styled.div`
display:flex;
margin:16px 0px;
.container{
    margin:0px 20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    p{
        color:#ccc;
        letter-spacing:0.03rem;
        font-weight:500;
        font-size:1.1rem;
    }
}

`

export const ProjectWrapper=styled.div`
display:flex;
flex-wrap:wrap;
`