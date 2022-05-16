import React from 'react';
import {ModalContainer,ModalWrapper,FormContainer,ButtonGroup,Button} from '../Setting/Setting.style';
import { InputComponent } from '../Setting/AddUser';
import { AddProjectDiv } from './AddProject..style';
import AddStages from './AddStages';

export const ProjectDetails=(props)=>{
    const {setType,setModal}=props;
    return(
        <>
        <div className='fDiv'>
                <h3>Add Project</h3>
                <h3 style={{cursor:"pointer"}} onClick={()=>setModal(false)} >𐤕</h3>
            </div>
            <FormContainer>
                <AddProjectDiv>
                    <InputComponent width="48%" type="text" label="Project Title" placeholder="Your project title"/>
                    <InputComponent width="48%" type="text" label="Project Category" placeholder="Your project category" />
                </AddProjectDiv>
                <AddProjectDiv>
                    <InputComponent type="text" width="100%" label="Project Description" placeholder="Write About Project"/>
                    
                </AddProjectDiv>
                <AddProjectDiv>
                    <InputComponent type="date" width="48%" label="Start Date" placeholder="Start Date" />
                    <InputComponent type="date" width="48%" label="End Date" placeholder="End date" />
                    </AddProjectDiv>
                    <AddProjectDiv style={{justifyContent:"flex-end"}} >
                {/* <div >Members</div> */}
                <div className='member'>Add Members</div>
            </AddProjectDiv>
            <AddProjectDiv>

            </AddProjectDiv>
            </FormContainer>
            
            <ButtonGroup >
                <Button onClick={()=>setModal(false)} color="#fff" textColor="#045680" border="#045680" >
                    Cancel
                </Button>
                <Button onClick={()=>setType("Stages")} color="#045680" border="#045680" textColor="#fff">
                   Ok
                </Button>
            </ButtonGroup>
        </>
    )
}

function AddProject(props) {
    const {setModal}=props;
    const [type,setType]=React.useState("");
  return (
   <ModalWrapper>
       <ModalContainer width="500px">
       {type===""?<ProjectDetails setModal={setModal} setType={setType}/>:<AddStages/>}
       </ModalContainer>
      
   </ModalWrapper>
  )
}

export default AddProject;

