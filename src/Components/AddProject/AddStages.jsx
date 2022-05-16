import React from 'react';
import {ModalWrapper,ModalContainer,FormContainer,Button,ButtonGroup} from '../Setting/Setting.style';
import { InputComponent } from '../Setting/AddUser';
import { AddProjectDiv ,RenderStage} from './AddProject..style';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export const StageDetails=()=>{
    return(
        <>
    <FormContainer>
                <AddProjectDiv>
                    <InputComponent width="48%" type="text" label="Stage Title" placeholder="Your stage title"/>
                    <InputComponent width="48%" type="number" label="Weight" placeholder="Stage Weight" />
                </AddProjectDiv>
                <AddProjectDiv>
                    <InputComponent type="textarea" width="100%" label="Stage Description" placeholder="Write About Stage"/>
                    
                </AddProjectDiv>
                <AddProjectDiv>
                    <InputComponent type="date" width="48%" label="Start Date" placeholder="Start Date" />
                    <InputComponent type="date" width="48%" label="End Date" placeholder="End date" />
                    </AddProjectDiv>
                    
            
            </FormContainer>
            <ButtonGroup style={{justifyContent:"flex-end"}}>
                <Button style={{display:"flex",alignItems:"center",padding:"3px 9px"}} color="#045680" border="#045680" textColor="#fff">Add Stage</Button>
               
            </ButtonGroup>
            </>)
}

export const RenderStages=()=>{
    return (
        <RenderStage>
            <div className='fDiv'>
                Stage 1
            </div>
            <div className='sDiv'>
                {/* <Button color="#fff" textColor="#045680" border="#045680" > */}
                    <EditIcon style={{margin:"0px 5px",cursor:"pointer"}} color="primary"/>
                {/* </Button> */}
                {/* <Button color="#fff" textColor="#045680" border="#045680"> */}
                <DeleteIcon style={{margin:"0px 5px",cursor:"pointer"}} color="error"/>
                {/* </Button> */}
            </div>

        </RenderStage>
    )
}

function AddStages(props) {
    const {setModal}=props;
    const [isAddStage,setIsAddStage]=React.useState(false);
    console.log(isAddStage);
  return (
   <>
            <div className='fDiv'>

            <ArrowBackIcon style={{color:"grey",cursor:"pointer",}}/>
            <h3 style={{cursor:"pointer"}} onClick={()=>setModal(false)} >𐤕</h3>

            </div>
        <div className='fDiv'>
                <h3>Add Stages</h3>
                
            </div>
            <ButtonGroup style={{justifyContent:"flex-end"}}>
            <Button onClick={()=>setIsAddStage(true)} style={{display:"flex",alignItems:"center",padding:"3px 9px"}} color="#045680" border="#045680" textColor="#fff">
                <AddIcon /> Add 
            </Button>
            </ButtonGroup>

            <RenderStages/>
            {isAddStage&&<StageDetails/>}
            <ButtonGroup>
            <Button onClick={()=>setModal(false)} color="#fff" textColor="#045680" border="#045680" >
                    Cancel
                </Button>
                <Button color="#045680" border="#045680" textColor="#fff">
                   Create Project
                </Button>
            </ButtonGroup>


            
            
            </>
  )
}

export default AddStages