import React, { useState } from "react";
import {
  ModalWrapper,
  ModalContainer,
  FormContainer,
  InputContainer,
  Input,
  ButtonGroup,
  Button,
} from "./Setting.style";
import { User } from "../../Api/Api";
import axios from "axios";
import { useAuth } from "../../Auth/Auth";

// import { Button } from '../History/History.style';

export const InputComponent = (props) => {
  const { label, type, placeholder, width, onChange, value, name } = props;
  return (
    <InputContainer width={width}>
      <label>{label}</label>
      <Input
        type={type}
        onChange={onChange}
        autoComplete="new-password" 
        // autoFocus="off"
        // autoCorrect="off"
        value={value}
        name={name}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};

function AddUser(props) {
  const { setModal,render,setRender } = props;
  const { DisplaySnackbar } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    role: "",
    name:""
  });
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    try {
      const dt = await axios.post(
        User.addUser,
        {
          email: formData.email,
          role: formData.role,
          name: formData.name,
          companyId: localStorage.getItem("companyId"),
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      if (dt.data.status === "success") {
        DisplaySnackbar("User Added", "success");
        setRender(!render);
        setModal(false);
        
      }
    } catch (err) {
      DisplaySnackbar(err?.response?.data?.message, "error");
    }
  };

  return (
    <ModalWrapper>
      <ModalContainer width={"300px"}>
        <div className="fDiv">
          <h3>Add User</h3>
          <h3 style={{ cursor: "pointer" }} onClick={() => setModal(false)}>
            𐤕
          </h3>
        </div>
        <FormContainer>
          <InputComponent
            type="text"
            name="name"
            onChange={handleOnChange}
            value={formData.name}
            placeholder="Name"
            label="Name"
          />
          <InputComponent
            type="text"
            name="email"
            onChange={handleOnChange}
            value={formData.email}
            placeholder="Email"
            label="Email"
          />
          <InputComponent
            type="text"
            name="role"
            onChange={handleOnChange}
            value={formData.role}
            placeholder="Role"
            label="Role"
          />
        </FormContainer>
        <ButtonGroup>
          <Button
            onClick={() => setModal(false)}
            color="#fff"
            textColor="#045680"
            border="#045680"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleSubmit();
            }}
            color="#045680"
            border="#045680"
            textColor="#fff"
          >
            Add
          </Button>
        </ButtonGroup>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default AddUser;
