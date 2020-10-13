import React from "react";
import { Grid } from "@material-ui/core";
import CCard from "../Components/Card";
import endurance from "./endurance";

const Endurance = () => {
  const getEnduranceList = EnduranceListObj => {
    return (
      <Grid item xs={12} sm={4}>
        <CCard {...EnduranceListObj} />
      </Grid>
    );
  };
  return (
    <Grid container spacing={2} justify="center">
      {endurance.map(EnduranceListObj => getEnduranceList(EnduranceListObj))}
    </Grid>
  );
};

export default Endurance;
