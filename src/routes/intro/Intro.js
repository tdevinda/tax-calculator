import React from 'react'
import {Grid} from "@material-ui/core";
import Image from "material-ui-image/lib/components/Image/Image";
import Typography from "@material-ui/core/Typography/Typography";

function Intro() {

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Image
          src="/img/tax.svg"
          imageStyle={{
            width: '250px',
            height: 'auto',
            align: 'middle'

          }}

        />
      </Grid>
      <Grid item xs={6}>
        <Typography>
          Welcome to the tax calculator. This will help you find how much you need to pay
          as taxes in each year
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Intro