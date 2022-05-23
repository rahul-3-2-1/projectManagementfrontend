import styled from 'styled-components';
export const ProjectListContainer=styled.div`

flex:1;
background-color:#fff;
min-height:90vh;
border-radius:5px;
// box-shadow:3px 4px 8px #ccc;
margin:0px 14px;
padding:20px 8px;
.container{
    position: relative;
    height: 20px;
    background: #ccc;
    /* padding-right: 20px; */
    margin-right: 20px;
    border-radius: 10px;
}
.content{
    // min-width:1000px;
    max-width:1100px;
    overflow:auto;
    &::-webkit-scrollbar {
        width: 1px;
        height:5px;
                   
      }
      
      &::-webkit-scrollbar-track {
        background: #ccc;        /* color of the tracking area */
        
      }
      
      &::-webkit-scrollbar-thumb {
        background-color: #045680;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: 4px solid #045680;  /* creates padding around scroll thumb */
      }
    
    
    
    
}
.contentChild{
min-width:1500px;
}

`