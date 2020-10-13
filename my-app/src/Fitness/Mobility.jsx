import React from "react";
import { Grid } from "@material-ui/core";
import CCard from "../Components/Card";
import mobility from "./mobility";

const Mobility = () => {
  const getMobilityList = MobilityListObj => {
    return (
      <Grid item xs={12} sm={4}>
        <CCard {...MobilityListObj} />
      </Grid>
    );
  };
  return (
    <Grid container spacing={2} justify="center">
      {mobility.map(MobilityListObj => getMobilityList(MobilityListObj))}
    </Grid>
  );
};

export default Mobility;
