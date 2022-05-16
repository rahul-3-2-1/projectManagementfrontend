import { ButtonGroup } from '@mui/material';
import React from 'react';
import {ModalWrapper,ModalContainer, FormContainer,Button} from './Setting.style';

function UploadUser(props) {
    const {setModal}=props;
  return (
    <ModalWrapper>
        <ModalContainer width={"300px"}>
        <div className='fDiv'>
                <h3>Upload User</h3>
                <h3 style={{cursor:"pointer"}} onClick={()=>setModal(false)} >𐤕</h3>
            </div>
            <FormContainer style={{minHeight:"100px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <label className='file' for="file">Browse File</label>
                <input style={{display:"none"}} type="file" id="file"/>
            </FormContainer>
            <ButtonGroup style={{display:"flex",justifyContent:"space-between"}}>
            <Button onClick={()=>setModal(false)} color="#fff" textColor="#045680" border="#045680" >
                    Cancel
                </Button>
                <Button color="#045680" border="#045680" textColor="#fff">
                    Upload
                </Button>
            </ButtonGroup>
        </ModalContainer>
    </ModalWrapper>
    )
    
}

export default UploadUser