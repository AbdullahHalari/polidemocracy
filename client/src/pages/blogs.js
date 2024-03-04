import { Grid } from '@mui/material';
import React from 'react'
import CardUI from '../component/card'
import NavBar from '../component/navbar'

function Blogs() {
  return (
    <div>
      <NavBar />
      {/* <Grid container spacing={2}>
  <Grid item xs={8}>

          <CardUI />
  </Grid>
  </Grid> */}
      <div className="blogs">
        <div>
        </div>
        <div>
          <CardUI />
        </div>
        <div>
          <CardUI />
        </div>
        <div>
          <CardUI />
        </div>
        <div>
          <CardUI />
        </div>
        <div>
          <CardUI />
        </div>
        <div>
          <CardUI />
        </div>
      </div>
    </div>
  );
}

export default Blogs