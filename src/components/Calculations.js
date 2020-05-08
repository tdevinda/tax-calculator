import React from 'react';

const DEFAULT_CONCESSION = 3000000;
const MAX_ALLOWED_CONCESSION = 1200000;
const TAX_BLOCKS = [3000000, 3000000];
const BLOCK_RATES = [0.08, 0.14];

const calculateTax = (taxUnits) => {
  let totalIncomes = 0;
  let totalConcession = 0;

  let totalExpenses = 0; //just a counter.. todo: see if this is really needed

  let taxBreakdown = [];
  let concessionBreakdown = [];
  //take each tax unit, and find out how much each unit contributes to
  //  - income
  //  - tax concessions
  // then we can use the total income and the total concessions earned to calculate the tax
  taxUnits.map((taxUnit, index) => {
    let unitTotalIncome = 0;
    let unitTotalExpenses = 0;


    //total the incomes and expenses for this tax unit
    let incomeAndExpenseTotals = calculateTotalIncomeAndExpensesForTaxUnit(taxUnit);

    unitTotalIncome = incomeAndExpenseTotals.totalIncome;
    unitTotalExpenses = incomeAndExpenseTotals.totalExpenses;


    // when concession are granted they might be for an expense we do, or an income we make
    // e.g. - Part of housing loan's interest is added as a concession
    //      - certain agriculture related incomes may be tax free.
    let concessionFacingValue = 0;
    if (taxUnit.concession) {
      if (taxUnit.concession.effectiveOn === 'incomes') {
        concessionFacingValue = unitTotalIncome;
      } else if (taxUnit.concession.effectiveOn === 'expenses') {
        concessionFacingValue = unitTotalExpenses;
      }

      //now we find out how much concession we earned for this block
      let unitTotalConcession = calculateConcessionValue(concessionFacingValue, taxUnit.concession);
      concessionBreakdown.push({
        ...taxUnit.concession,
        value: unitTotalConcession
      });

      totalConcession += unitTotalConcession;

    }

    totalIncomes += unitTotalIncome;
    totalExpenses += unitTotalExpenses;


  });

  // the concession cannot exceed the max value permitted by the government
  let eligibleConcession = (totalConcession <= MAX_ALLOWED_CONCESSION)?totalConcession:MAX_ALLOWED_CONCESSION;
  // every person is eligible of a default concession. we calculate how much we have left for taxing after all these concessions
  let currentStandingIncomeAfterTaxBlock = totalIncomes - DEFAULT_CONCESSION - eligibleConcession;
  //now we calculate the taxes for each block and add them up. we reduce the amount left for taxing at each block calculation
  let totalTax = 0;
  TAX_BLOCKS.map((taxBlock, index) => {
    if(currentStandingIncomeAfterTaxBlock > 0) {
      let taxableIncomeForBlock = (currentStandingIncomeAfterTaxBlock < taxBlock)?currentStandingIncomeAfterTaxBlock:taxBlock;
      let taxedAmountForBlock = taxableIncomeForBlock * BLOCK_RATES[index];
      totalTax += taxedAmountForBlock;
      taxBreakdown.push({income: taxableIncomeForBlock, block: taxBlock, value: taxedAmountForBlock});
      currentStandingIncomeAfterTaxBlock -= taxBlock;
    }
  });

  let finalTaxCalculation = {
    totalTax: totalTax,
    totalIncomes: totalIncomes,
    totalExpenses: totalExpenses,
    totalConcessions: totalConcession,
    taxBreakdown: taxBreakdown
  };
  console.log(finalTaxCalculation);
  return finalTaxCalculation;

};

function calculateTotalIncomeAndExpensesForTaxUnit(taxUnit) {
  let unitTotalIncome = 0, unitTotalExpenses = 0;

  taxUnit.incomes && taxUnit.incomes.map((income, i) => {
    let multiplier = income.monthly ? 12 : 1;
    unitTotalIncome += income.value?(income.value * multiplier):0;
  });
  taxUnit.expenses && taxUnit.expenses.map((expense, i) => {
    let multiplier = expense.monthly ? 12 : 1;
    unitTotalExpenses += expense.value?(expense.value * multiplier):0;
  });

  return {totalIncome: unitTotalIncome, totalExpenses: unitTotalExpenses}

}

/**
 * Delegates calculation on which type the concession is
 * @param amount
 * @param concession
 * @returns {*}
 */
function calculateConcessionValue(amount, concession) {
  if (concession.type === 'block') {
    return calculateBlockConcession(amount, concession);
  } else if (concession.type === 'percentage') {
    return calculatePercentageConcession(amount, concession);
  }
}

/**
 * Calculates the concession for a block type
 * @param amount
 * @param concession
 * @returns {number}
 */
function calculateBlockConcession(amount, concession) {
  return (amount <= concession.limit)?amount:concession.limit;
}

/**
 * Calculates concession for a percentage type
 * @param amount
 * @param concession
 */
function calculatePercentageConcession(amount, concession) {
  let calculatedConcession = amount * concession.value;
  // its the limit or the calculation whichever is lower
  return (calculatedConcession <= concession.limit)?calculatedConcession:concession.limit;
}

export {calculateTax};
