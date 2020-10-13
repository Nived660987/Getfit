import React from "react";
import { Grid } from "@material-ui/core";
import CCard from "../Components/Card";
import strength from "./strength";
const Strength = () => {
  const getStrengthList = StrengthListObj => {
    return (
      <Grid item xs={12} sm={4}>
        <CCard {...StrengthListObj} />
      </Grid>
    );
  };
  return (
    <Grid container spacing={2} justify="center">
      {strength.map(StrengthListObj => getStrengthList(StrengthListObj))}
    </Grid>
  );
};

export default Strength;
