import React from 'react';

import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

const Fallback = () => {
  return (
    <Grid container sx={{ justifyContent:'center', alignItems:'center' }}>
        <Grid item> 
            <CircularProgress/>
        </Grid>
    </Grid>
  );
};

export default Fallback;
