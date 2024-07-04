import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Login = () => {
 const [page,setPage]=useState('Movie')
 //const [count,setCount]=useState('SignUp')
 function valueLogin(){
    setCount('SignUp')
 }
  return (
   <div>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Welcome to {page} Page</h1>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue="Hello World"
        />
        </div>
        <div>
        <TextField
          id="outlined-disabled"
          label="email"
          defaultValue="Hello World@gmail.com"
          type='email'
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        </div>
        <div>
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        </div>
        
        </Box>
         
         <Button varient='contained' > Login</Button> 
         <br />
         <small>new user? <Button varient='contained' > SignUp</Button>  </small>
         </div>
  )
}

export default Login