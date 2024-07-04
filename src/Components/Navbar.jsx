import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            firstApp
          </Typography>
          <Link to='/'><Button style={{color:'white'}}>View</Button></Link>
          <Link to='/log'><Button style={{color:'white'}}>Login</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar