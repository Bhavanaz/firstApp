import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = ({person}) => {
 const [page,setPage]=useState('Details')
 const [count,setCount]=useState(0)
 const [form,setForm]=useState({
  Name:person.name,
  email:person.email,
  password:person.password,
  address:person.address
 })
 function valueAdd(){
    setCount(count+1)
    console.log(form)
 }
 function valueCap(e){
   // console.log(e)
    setForm({...form,[e.target.name]:e.target.value})
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
          name='Name'
          value={form.Name}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField
          id="outlined-disabled"
          label="email"
          type='email'
          name='email'
          value={form.email}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          name='password'
          value={form.password}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField
          id="outlined-read-only-input"
          label="Address"
          name='address'
          value={form.address}
          onChange={valueCap}
        />
        </div>
        
        </Box>
         
         <Button variant='contained' onClick={valueAdd}>  Register</Button> 
         <br />
         {/*<small>button clicked {count} times</small>*/}
         </div>
  )
}

export default Add