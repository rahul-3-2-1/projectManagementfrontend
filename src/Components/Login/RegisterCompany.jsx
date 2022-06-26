import React,{useState} from 'react';
import { LoginFormContainer,LoginFormHeading,LoginFormLabel,LoginFormInput ,LoginFormButton } from './Login.style';
import axios from 'axios';
import {Company,User} from '../../Api/Api';
import { useAuth } from '../../Auth/Auth';
import {useNavigate} from 'react-router-dom';

function RegisterCompany({setLogin}) {
    const navigation=useNavigate();
    const {DisplaySnackbar,setLogedIn}=useAuth();
    const [formData,setFormData]=useState({name:"",email:"",password:"",cPassword:"",companyName:"",users:"",role:""})
    const handleOnChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const handleRegister=async ()=>{
        const {name,email,password,cPassword,companyName,role,users}=formData;
        if(!name||!email||!password||!cPassword||!companyName||!role||!users)
        {
            DisplaySnackbar("All fields are mandatory","error");
            return;
        }
        if(password!==cPassword)
        {
            DisplaySnackbar("Passwords are not matching","error");
            return;
        }
        try{
        const dt=await axios.post(User.createUser,{
            name,
            email,
            password,
            isAdmin:true

        })

        console.log(dt);
        localStorage.setItem("token",dt.data.token);
        localStorage.setItem("expiresIn",dt.data.expiresIn);
        localStorage.setItem("user_id",dt.data.data.user_id);
        localStorage.setItem("isAdmin",true);
        localStorage.setItem("name",dt.data.data.name)
        
        const dta=await axios.post(Company.createCompnay,{
            name:companyName,
            users,
            owners:[localStorage.getItem("user_id")]
        },{
            headers:{
                token:`${localStorage.getItem("token")}`
            }
        });
        console.log(dta);
        localStorage.setItem("companyId",dta.data.data.companyId);
        DisplaySnackbar("Compamy Created","success");
        setLogedIn(true);
        setTimeout(()=>navigation('/'),3000);
        
    }
    catch(err)
    {
        console.log(err);
        DisplaySnackbar(err.response.data.message,"error");
    }
        // axios.post(Company.createCompnay,{
        //     head
        // })
        
    }
  return (
   <LoginFormContainer>
        <LoginFormHeading>
                 Register Company
             </LoginFormHeading>
             <div className='cont'>
             <LoginFormLabel>
                 Your Name
             </LoginFormLabel>
             <LoginFormInput name="name" value={formData.name} onChange={handleOnChange}/>
             </div>
             <div className='cont'>
             <LoginFormLabel>
                 Email
             </LoginFormLabel>
             <LoginFormInput name="email" value={formData.email} onChange={handleOnChange}/>
             </div>
             <div className='cont'>
             <LoginFormLabel>
                 Your Role
             </LoginFormLabel>
             <LoginFormInput name="role" value={formData.role} onChange={handleOnChange}/>
             </div>
             <div className='cont'>
             <LoginFormLabel>
                 Company Name
             </LoginFormLabel>
             <LoginFormInput name="companyName" vlaue={formData.companyName} onChange={handleOnChange}/>
             </div>
             <div className='cont'>
             <LoginFormLabel>
                No. of Users
             </LoginFormLabel>
             <LoginFormInput name="users" value={formData.users} onChange={handleOnChange}/>
             </div>
             <div className='cont'>
             <LoginFormLabel>
                 Password
             </LoginFormLabel>
             <LoginFormInput name="password" value={formData.password} onChange={handleOnChange}/>
             </div>
             <div className='cont'>
             <LoginFormLabel>
                 Confirm Password
             </LoginFormLabel>
             <LoginFormInput name="cPassword" value={formData.cPassword} onChange={handleOnChange}/>
             </div>
             <p className='bl'>Already have an account ? <span onClick={()=>setLogin(true)}>Click here</span></p>
             <div style={{textAlign:"center"}}>
             <LoginFormButton onClick={()=>handleRegister()}>
                 Register Now
             </LoginFormButton>
             </div>
   </LoginFormContainer>
  )
}

export default RegisterCompany