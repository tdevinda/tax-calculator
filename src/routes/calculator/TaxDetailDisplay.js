import React, {useState} from 'react';
import Typography from "@material-ui/core/Typography/Typography";


function TaxDetailDisplay(props) {

  const DEFAULT_CONCESSION = 3000000;
  const TAX_BLOCKS = [3000000, 3000000];
  const BLOCK_RATES = [0.08, 0.14];

  function calculateTaxPayable() {
    return calculateTax(props.totalIncome?props.totalIncome:0, props.totalConcession?props.totalConcession:0);
  }

  function calculateTax(totalIncomes, totalConcessions) {
    if (totalIncomes <= DEFAULT_CONCESSION) {
      return 0;
    }

    let taxableIncome = totalIncomes - DEFAULT_CONCESSION - totalConcessions;
    let totalTax = 0;
    TAX_BLOCKS.map((blockValue, i) => {
      if(taxableIncome > 0) {
        totalTax += taxableIncome * BLOCK_RATES[i];
        taxableIncome -= blockValue;
      }
    });

    return totalTax;
  }

  return (
    <>
      <Typography variant="h4">Total Income</Typography>
      <Typography variant="h2">{props.totalIncome}</Typography>

      <Typography variant="h4">Total Concessions Received for income</Typography>
      <Typography variant="h2">{props.totalConcession}</Typography>

      <Typography variant="h4">Total tax payable</Typography>
      <Typography variant="h2">{calculateTaxPayable()}</Typography>
    </>
  )
}

export default TaxDetailDisplay
