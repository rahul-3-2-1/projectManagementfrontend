import styled from 'styled-components';
export const HistoryHeader=styled.div`
// height:50px;
background-color:#fff;
box-shadow:1px 2px 10px #ebebeb;
padding:10px 10px;




` 

export const HistoryContainer=styled.div`
background-color:#fff;
box-shadow:1px 2px 10px #ebebeb;
padding:10px 10px;
margin-top:20px;
border-radius:8px;
// padding-top:18px;

`

export const HistoryItem=styled.div`
padding:18px 0px;
.projDiv{
    display:flex;
    align-items:center;
    
    p{
        margin-left:10px;
        color:grey;
        font-size:1.1rem;
        font-weight:500;
    }
}
.stagDiv{
    display:flex;
    margin:10px 0px;
    >div{
        margin-right:20px;
        width:20%;
    }
    >div h3{
        margin-bottom:5px;
    }
    >div p{
        color:grey;
        font-weight:500;
    }

}


`
export const Button=styled.button`

background-color:${({color})=>color};
border:none;
border-radius:5px;
padding:5px 10px;
color:#fff;
cursor:pointer;

`