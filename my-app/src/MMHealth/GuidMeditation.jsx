import React from 'react';
import CCard from '../Components/Card';
import { Grid } from '@material-ui/core';
import GuidMedList from './guidmed';

const GuidMed = () => {
  const getGuidMed = GuidMedListObj => {
    return (
      <Grid item xs={12} sm={4}>
        <CCard {...GuidMedListObj} />
      </Grid>
    );
  };
  return (
    <Grid container>
      {GuidMedList.map(GuidMedListObj => getGuidMed(GuidMedListObj))}
    </Grid>
  );
};
export default GuidMed;
