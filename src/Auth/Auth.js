import React,{useContext,useState,createContext,useEffect} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';
import {Alert} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';




  

  const AuthContext=createContext();

export function useAuth(){
    return useContext(AuthContext);
}




export const AuthProvider=({children})=>{
    const [logedIn,setLogedIn]=useState(false);
    const [loading,setLoading]=useState(false);
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
        if(!logedIn)
        {
            navigation('/login')
        }
    },[])


    const value={
        logedIn,
       
        DisplaySnackbar,
        setLogedIn,
      
        
    }


    return(
        <AuthContext.Provider value={value}>
        {!loading&&children}
        <Snackbar open={open} autoHideDuration={6000}  severity={type} onClose={handleClose}>
        <Alert action={action}  severity={type} sx={{width:"100%"}}>
            {mssg}
            </Alert>
      </Snackbar>
        
        </AuthContext.Provider>
    )



}