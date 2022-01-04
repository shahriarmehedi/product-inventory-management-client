import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail]=useState('')
    const [success,setSuccess]=useState(false)
    const handleOnBlur=e=>{
        setEmail(e.target.value)
    }
    const habdleAdminSubmit=e=>{
        e.preventDefault()
        const user={email}
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount)
            console.log(data)
            setSuccess(true)
        })
    }
    return (
        <div>
         <h1>Make An Admin</h1>  

         <form onSubmit={habdleAdminSubmit}>
         <TextField  
         label="Email" 
        
         variant="standard" 
         onBlur={handleOnBlur}
         />
          
         <Button type="submit" variant="contained">Make Admin</Button>
         </form>
         {success&&<Alert>Made Admin Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;