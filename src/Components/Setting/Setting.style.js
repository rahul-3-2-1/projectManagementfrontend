import styled from 'styled-components';
export const ModalWrapper=styled.div`
position:absolute;
top:0;
left:0;
right:0;
bottom:0;
// z-index:200;
background: rgba(0,0,0,0.5);
   z-index: 1000000;
display:flex;
justify-content:center;
align-items:center;

`

export const ModalContainer=styled.div`

min-width:${({width})=>width?width:""};
min-height:${({minHeight})=>minHeight?minHeight:""};
background-color:#fff;
// z-index:300;
padding:20px 20px;
border-radius:8px;
box-shadow:1px 2px 10px #ebebeb;
.fDiv{
    display:flex;
    justify-content:space-between;
}
.result{
    max-height:300px;
    overflow:auto;
    &::-webkit-scrollbar {
        width: 4px;
                   
      }
      
      &::-webkit-scrollbar-track {
        background: #ccc;        /* color of the tracking area */
        
      }
      
      &::-webkit-scrollbar-thumb {
        background-color:#045680;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        // border: 3px solid orange;  /* creates padding around scroll thumb */
      }
    
    
}



`

export const FormContainer=styled.div`

.file{
    padding:5px 20px;
    padding-bottom:6px;
    border:2px solid #045680 ;
    color:#045680;
    border-radius:5px;
    // margin-top:50px;
}



`
export const InputContainer=styled.div`
display:flex;
flex-direction:column;
${({width})=>width?`width:${width};`:""}
label{
    color:grey;
    font-weight:500;
    margin:5px 0px;

}

`;
export const Input=styled.input`

border:1px solid grey ;

padding:6px 4px;
border-radius:4px;
font-weight:500;
color:grey;
&:focus{
    outline:none;
   

}


`

export const ButtonGroup=styled.div`

margin-top:15px;
display:flex;
justify-content:space-between;
`

export const Button=styled.button`
background-color:${({color})=>color};

color:${({textColor})=>textColor};

font-weight:500;
border:1px solid ${({border})=>border};
font-size:1rem;
padding:6px 20px;
border-radius:5px;
cursor:pointer;
transition:0.3s;
&:hover{
    opacity:0.8;
}

`