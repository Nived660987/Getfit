import React from 'react';
import CCard from '../components/Card';
import YogaList from './yogaposes';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Link as RouterLink, Switch, Route } from "react-router-dom";

const Yoga = () => {
  const getYogaList = YogaListObj => {
    return (
      <Grid item xs={12} sm={4}>
        <CCard {...YogaListObj} />
      </Grid>
    );
  };
  return (
    <Grid container spacing={2}>
      {YogaList.map(YogaListObj => getYogaList(YogaListObj))}
    </Grid>
  );
};

export default Yoga;
