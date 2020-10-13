import React from "react";
import { Button, Grid } from "@material-ui/core";

const FitnessHome = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Button href="./Strength">Strength</Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button>Endurance</Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button>Mobility</Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default FitnessHome;
