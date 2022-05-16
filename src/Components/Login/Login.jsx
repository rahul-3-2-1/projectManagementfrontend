import React from 'react';
import {LoginContainer,LoginForm,LoginImg,LoginFormContainer,LoginFormHeading,LoginFormInput,LoginFormLabel,LoginFormButton} from './Login.style';
import CompanyImg from '../../img/Company.png';
import RegisterCompany from './RegisterCompany';
import {useAuth} from '../../Auth/Auth';
import axios from 'axios';
import {User} from '../../Api/Api';
import { useNavigate } from 'react-router-dom';



function Login() {
    const navigation=useNavigate();
    const {DisplaySnackbar,setLogedIn}=useAuth();
    const [login,setLogin]=React.useState(true);
    const [formData,setFormData]=React.useState({
        email:"",
        password:""
    });
    const handleOnChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})

    }

    const handleLogin=async()=>{
        const {email,password}=formData;
        if(!email||!password)
        {
            DisplaySnackbar("All fields are mandatory","error");
            return;
        }
        try{

        const dt=await axios.post(User.login,{
            email,password
        })
        console.log(dt);
        DisplaySnackbar("Sign In Successfull","success");
        localStorage.setItem("token",dt.data.token);
        localStorage.setItem("expiresIn",dt.data.expiresIn);
        localStorage.setItem("user_id",dt.data.data.user_id);
        localStorage.setItem("isAdmin",dt.data.data.isAdmin);
        localStorage.setItem("companyId",dt.data.companyId);
        setLogedIn(true)
        setTimeout(()=>navigation('/'),3000);
    }
    catch(err)
    {
        DisplaySnackbar(err.response.data.message,"error");
    }
    }
  return (
    <LoginContainer>
        

        
        <LoginImg>
        {/* <div className='fx'> */}
            
       <img src={CompanyImg} alt=""/>
       
       <div className='text'>
           <div>PLAN</div>
           <div>EXECUTE</div>
           <div>TRACK</div>
       </div>
       {/* </div> */}
        </LoginImg>
        <div className='fdiv'></div>
        <LoginForm>
            {login?
             <LoginFormContainer>
             <LoginFormHeading>
                 Log IN
             </LoginFormHeading>
             <div className='cont'>
             <LoginFormLabel>
                 Email
             </LoginFormLabel>
             <LoginFormInput onChange={handleOnChange} name="email" value={formData.email} placeholder='Enter Email' type="text"/>
             </div>
             <div className='cont'>
             <LoginFormLabel>
                 Password
             </LoginFormLabel>
             <LoginFormInput onChange={handleOnChange} value={formData.password} name="password" placeholder="Enter Password" type="password"/>
             </div>
             <p className='bl'>Don't have an account yet? <span onClick={()=>setLogin(false)}>Click here</span></p>
             <div style={{textAlign:"center"}}>
             <LoginFormButton onClick={()=>handleLogin()}>
                 Log IN
             </LoginFormButton>
             </div>
         </LoginFormContainer>:<RegisterCompany setLogin={setLogin}/>}
           
        </LoginForm>


    </LoginContainer>
  )
}

export default Login;