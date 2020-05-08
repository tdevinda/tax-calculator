let salaryUnit = {
  title: 'Your Salary',
  incomes: [
    {
      title: 'Salary fixed',
      monthly: true
    },
    {
      title: 'Fixed allowances',
      monthly: true
    },
    {
      title: 'All bonus payments',
      monthly: false
    }

  ]
};

let loanUnit = {
  title: 'Loan Concession',
  expenses: [
    {
      title: 'Monthly loan payment',
      monthly: true
    }
  ],
  concession: {
    title: 'Concession on loan payment',
    type: 'percentage',
    value: 0.08,
    limit: 1200000,
    effectiveOn: 'expenses'
  }
};

let taxUnits = [
  salaryUnit, loanUnit
];

export const TAXUNITS = taxUnits;