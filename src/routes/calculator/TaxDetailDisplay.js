import React, {useState} from 'react';
import Typography from "@material-ui/core/Typography/Typography";


function TaxDetailDisplay(props) {

  return (
    <>
      <Typography variant="h4">Total Income</Typography>
      <Typography variant="h2">{props.totalIncome}</Typography>

      <Typography variant="h4">Total Concessions Received for income</Typography>
      <Typography variant="h2">{props.totalConcession}</Typography>

      <Typography variant="h4">Total tax payable</Typography>
      <Typography variant="h2">{props.totalPayable}</Typography>
    </>
  )
}

export default TaxDetailDisplay
