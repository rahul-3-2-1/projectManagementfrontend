import React from 'react';
import { ModalWrapper,ModalContainer,FormContainer,InputContainer,Input,ButtonGroup,Button } from './Setting.style';
// import { Button } from '../History/History.style';

export const InputComponent=(props)=>{
    const {label,type,placeholder,width}=props;
    return(
        <InputContainer width={width}>
        <label >{label}</label>
        <Input type={type} placeholder={placeholder} />
        </InputContainer>
    )
}

function AddUser(props) {
    const {setModal}=props;
        return (
    <ModalWrapper>
        <ModalContainer width={"300px"}>
            <div className='fDiv'>
                <h3>Add User</h3>
                <h3 style={{cursor:"pointer"}} onClick={()=>setModal(false)} >𐤕</h3>
            </div>
            <FormContainer>
            <InputComponent type="text" placeholder="Email" label="Email" />
            <InputComponent type="text" placeholder="Role" label="Role" />
            </FormContainer>
            <ButtonGroup>
                <Button onClick={()=>setModal(false)} color="#fff" textColor="#045680" border="#045680" >
                    Cancel
                </Button>
                <Button color="#045680" border="#045680" textColor="#fff">
                    Add
                </Button>
            </ButtonGroup>
        </ModalContainer>
    </ModalWrapper>
  )
}

export default AddUser