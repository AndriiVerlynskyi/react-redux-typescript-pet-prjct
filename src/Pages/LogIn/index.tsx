import React from 'react';

import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ALert from '@mui/material/Alert'

const LogIn = () => {
  return (
    <Grid container sx={{ justifyContent: 'center', backgroundColor: 'rgb(249, 250, 252)' }}>
      <Grid item>
        <Card sx={{marginTop: '150px'}}>
          <CardHeader title='Log in' sx={{ textAlign:'center', fontWeight:'600' }}/>
          <CardContent>
            <TextField 
              id='outlined-basic' 
              label='Email adress' 
              variant='outlined'
              margin='normal'
              sx={{ width: '100%'}}
            />
            <TextField 
              id='outlined-basic' 
              label='Password' 
              variant='outlined' 
              margin='normal'
              sx={{ width: '100%'}}
            />
            <CardActions>
              <Button color='info' variant='contained' size='large' sx={{ width: '100%', borderRadius:'8px'}}>Log In</Button>
            </CardActions>
            <ALert severity='info' variant='standard' color='info' sx={{ margin: '20px 0px'}}>You can use demo@devias.io and password Password123!</ALert>
            <Divider/>
              <CardActions sx={{display:'flex', justifyContent:'space-between'}}>
                <Link sx={{textDecoration:'none'}}>Create account</Link>
                <Link sx={{textDecoration:'none'}}>Forgot password</Link>
              </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
};

export default LogIn;
