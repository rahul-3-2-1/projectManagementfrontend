import styled from 'styled-components';

export const LoginContainer=styled.div`
display:flex;

// .fdiv{
//     flex:0.65;
// }
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
// overflow:auto;
`

export const LoginImg=styled.div`

max-height:100vh;
position:relative;
top:0;
flex:0.65;

img{
    max-height:100%;
    width:100%;
}
.text{
    display:flex;
    position:absolute;
    top:25%;
    left:50%;
    transform:translateX(-50%);
}
.text div{
    padding:2px 10px;
    border-right:2px solid #000;
}

`

export const LoginForm=styled.div`
flex:.35;
background-color:#045680;
overflow:auto;
padding-bottom:20px;


`

export const LoginFormContainer=styled.div`
margin-top:100px;

padding:0px 10px;
margin-left:auto;
margin-right:auto;
max-width:500px;
.cont{
    margin-bottom:20px;
}
.bl{
    color:#87bbf8;
    font-size:.8rem;
    margin-bottom:5px;

    span{
        cursor:pointer;
        &:hover{
            text-decoration:underline;

        }
    }
    
}

`
export const LoginFormHeading=styled.div`
color:#fff;
font-size:1.3rem;
font-weight:500;
margin-bottom:20px;
`

export const LoginFormLabel=styled.div`
color:#FFFFFF;
font-size:1rem;
margin:7px 0px;
`
export const LoginFormInput=styled.input`

display:block;
width:100%;
padding:6px 7px;
margin:0 auto;


background: rgba(255, 255, 255, 0.9);
border: 2px solid #DBDBDB;
border-radius: 4px;

&:focus{
    outline:none;
}



`
export const LoginFormButton=styled.button`
background: #FFFFFF;
border-radius: 4px;
padding:7px 19px;
border:none;
padding-bottom:6px;
background-color:#fff;
// opacity:0.3;
color:#045680;

cursor:pointer;


`