import React from 'react';

function Calculation() {
  const DEFAULT_CONCESSION = 300000;
  const TAX_BLOCKS = [3000000, 3000000];
  const BLOCK_RATES = [0.08, 0.14];

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


}

export default calculateTax;