import styled from 'styled-components';
export const AddProjectDiv=styled.div`
display:flex;
justify-content:space-between;
.member{
    color:#045680;
   
    transition:0.3s;
    margin:5px 0px;
    cursor:pointer;
    &:hover{
        text-decoration:underline;
    }
    
}


`

export const RenderStage=styled.div`
display:flex;
margin:10px 0px;
.fDiv{
    padding:5px 8px;
    background-color:#04568070;

    border-radius:5px;
    border:1px solid #045680;
    color:#fff;
    flex:0.85;
margin-right:10px;

}
.sDiv{
    display:flex;
    align-items:center;
    flex:0.15;


}
`


export const Members=styled.div`
min-height:100px;
display:flex;
grid-grap:2;
`
export const SearchContainer=styled.div`
position:relative;
.icon{
    position:absolute;
    left:3px;


}

`

export const SearchComponent=styled.input`
background-color:#fff;
display:block;
width:50%;
border:1px solid grey;
padding:5px 10px;
font-size:.9rem;
padding-left:22px;
&:focus{
    outline:none;
}
`

export const MembersBox=styled.div`

height:30px;
padding:3px 10px;
border-radius:3px;

background-color:#70aeca;
position:relative;
margin-right:14px;
.cross{
    position:absolute;
    top:0;
    right:0;
    transform:translateY(-50%);
    background-color:#ccc;

    height:14px;
    width:14px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
}


`