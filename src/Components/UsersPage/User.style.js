import styled from 'styled-components';

export const Header=styled.div`
    display:flex;
  
  align-items: center;

  flex-wrap: wrap;
  cursor:pointer;
  padding:10px 5px;
  div{
      margin-right:10px;

  }

  ${({active})=>active&&`
  
  border-left:4px solid #045680;
  background-image:linear-gradient(to right,#04568070,#0456804f);
  .txt{
  color:#045680 !important;
//   font-weight:800;
  }
  `}
`



export const Text = styled.p`
 
  color: grey;
  font-size:1rem;
  font-weight:500;
  
`;

export const UsersProjectContainer=styled.div`
display:flex;
.userDiv{
    min-width:280px;
    background-color:#fff;
    min-height:90vh;
    border-radius:5px;
    // box-shadow:3px 4px 8px #ccc;

}

`