import React,{useState} from 'react';
import { ProfileWidth,Options } from './Header.style';
import { ModalWrapper,ModalContainer,FormContainer,Button,ButtonGroup } from '../Setting/Setting.style';
import { InputComponent } from '../Setting/AddUser';
import { User } from '../../Api/Api';
import { useAuth } from '../../Auth/Auth';
import axios from 'axios';

export const UploadPic=({setModal})=>{
    const [file,setFile]=useState("");
    const {DisplaySnackbar}=useAuth();
    const updateProfile=async()=>{
      try{
        const data=new FormData();
        data.append("file",file[0]);
        data.append("upload_preset","projectManagement");
        data.append("cloud_name","rahul88009243");
        // c_fill,h_200,r_max,w_200
        const res=await fetch('https://api.cloudinary.com/v1_1/rahul88009243/image/upload',{
          method:"POST",
          body:data
      }).then(res=>res.json())
       console.log(res.secure_url);
       const url=res.secure_url.split('upload');
       let linkkk=url[0]+'upload'+'/c_fill,h_200,r_max,w_200'+url.splice(1);
       console.log(linkkk);
       localStorage.setItem("profilePic",linkkk)

       const dt=await axios.patch(User.updateProfilePic(localStorage.getItem("user_id")),{
         pic:linkkk
       },{
         headers:{
           token:localStorage.getItem('token')
         }
       });
       DisplaySnackbar(dt?.data?.message,"success");

      }
      catch(err)
      {
        console.log(err)
        DisplaySnackbar(err.message,"error");
      }

    }

    return(
        <ModalWrapper>
            <ModalContainer style={{minWidth:"300px"}}>
            <div className="fDiv">
          <h3>Upload Pic</h3>
          <h3 style={{ cursor: "pointer" }} onClick={() => setModal(false)}>
            𐤕
          </h3>
        </div>
        <FormContainer
          style={{
            minHeight: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label className="file" for="file">
            {file ? file[0].name : "Browse File"}
          </label>
          <input
            onChange={(e) => setFile(e.target.files)}
            style={{ display: "none" }}
            type="file"
            id="file"
          />
        </FormContainer>
        <ButtonGroup
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button
            onClick={() => setModal(false)}
            color="#fff"
            textColor="#045680"
            border="#045680"
          >
            Cancel
          </Button>
          <Button
            onClick={()=>updateProfile()}
            color="#045680"
            border="#045680"
            textColor="#fff"
          >
            Upload
          </Button>
        </ButtonGroup>
            </ModalContainer>
        </ModalWrapper>
    )
}

export const ResetPassword=({setModal})=>{
    const [formData,setFormData]=useState({
        oldPassword:"",
        newPassword:"",
        cPassword:""
    })
    const {DisplaySnackbar}=useAuth();
    const handleOnChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});

    }
    const handleSubmit=async(req,res)=>{
      const {newPassword,cPassword}=formData;
      if(!cPassword||!newPassword)
      {
        DisplaySnackbar("Fields can't be empty");
      }
      try{
        console.log(cPassword);
        console.log(newPassword);
        const data=await axios.patch(User.resetPassword(localStorage.getItem("user_id")),{newPassword,cPassword},{
          headers:{
            token:localStorage.getItem('token')
          }
        })
        if(data?.data?.status==='success')
        {
          DisplaySnackbar("Password Updated successfully","success");
        }
       
      }
      catch(err)
      {
        console.log(err);
        DisplaySnackbar(err.response.data.message,"error");
      }

    }
    return(
        <ModalWrapper>
      <ModalContainer width={"300px"}>
        <div className="fDiv">
          <h3>Reset Password</h3>
          <h3 style={{ cursor: "pointer" }} onClick={() => setModal(false)}>
            𐤕
          </h3>
        </div>
        <FormContainer>
          
          <InputComponent
            type="password"
            name="newPassword"
            onChange={handleOnChange}
            value={formData.newPassword}
            placeholder=""
            label="New Password"
          />
          <InputComponent
            type="password"
            name="cPassword"
            onChange={handleOnChange}
            value={formData.cPassword}
            placeholder=""
            label="Confirm Password"
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

    )
}
function ProfileOptions(props) {
    const {profile,setProfile,pass,setPass}=props;
    
  return (
      <>
        <ProfileWidth>
            <Options onClick={()=>setProfile(true)}>
                Change Profile Pic
            </Options>
            <Options onClick={()=>setPass(true)}>
               Reset Password
            </Options>
            <Options>
              Logout
            </Options>
           
        </ProfileWidth>
       
        </>

  )
}

export default ProfileOptions