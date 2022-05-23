import React,{useContext,useState,createContext,useEffect} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';
import {Alert} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {User} from '../Api/Api';




  

  const AuthContext=createContext();

export function useAuth(){
    return useContext(AuthContext);
}




export const AuthProvider=({children})=>{
    const [logedIn,setLogedIn]=useState(false);
    const [loading,setLoading]=useState(true);
    const [open,setOpen]=useState(false);
    const [type,setType]=useState("");
    const [mssg,setMssg]=useState("");
    const navigation=useNavigate();

    const action = (
        <React.Fragment>
         
         <div>
            <CloseIcon style={{cursor:"pointer",color:"black",fontWeight:"500",transform:"translateY(-50%)",marginTop:"50%"}} onClick={()=>setOpen(false)} />
        </div>
        
        </React.Fragment>
      );
    const DisplaySnackbar=(mssg,type)=>{

        setOpen(true);
        setMssg(mssg);
        setType(type);
    }
    const handleClose=()=>{
        setOpen(false);
    }
    useEffect(()=>{
        const verify=async()=>{
            
            try{
            const dt=await axios.get(User.verify,{
            headers:{
                token:`${localStorage?.getItem("token")}`
            }
        }
        )
            console.log(dt);
            if(dt.data.data==="true")
            {
                setLogedIn(true);
            
            }
            else
            {
                setLogedIn(false);
                navigation('/login')
            }
            }
            catch(err)
            {
              
                setLogedIn(false);
                navigation('/login')
            }
            }

        verify();
        setLoading(false)
    },[])


    const value={
        logedIn,
       
        DisplaySnackbar,
        setLogedIn,
      
        
    }


    return(
        <AuthContext.Provider value={value}>
        {!loading&&children}
        <Snackbar style={{zIndex:"100000"}} open={open} autoHideDuration={6000}  severity={type} onClose={handleClose}>
        <Alert action={action}  severity={type} sx={{width:"100%"}}>
            {mssg}
            </Alert>
      </Snackbar>
        
        </AuthContext.Provider>
    )



}