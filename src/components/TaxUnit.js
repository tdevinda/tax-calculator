import React, {useState} from 'react';
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Avatar from "@material-ui/core/Avatar/Avatar";
import TextField from "@material-ui/core/TextField/TextField";
import CardContent from "@material-ui/core/CardContent/CardContent";

function getConcessionAmount(taxunit) {

}

function TaxUnit(props) {
  let data = props.taxunit;

  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  
  function handleIncomeUpdates(event, index) {
    let updateIncomes = [...incomes];
    let multiplier = (data.incomes[index].monthly) ? 12 : 1;
    // console.log(parseFloat(event.target.value) + '*' + multiplier + '=' + (parseFloat(event.target.value) * multiplier));
    updateIncomes[index] = parseFloat(event.target.value) * multiplier;
    setIncomes(updateIncomes);
    props.callback({incomes: updateIncomes, expenses: expenses}); //make sure to use the new value here instead of the hook.
        // the hook does not reflect the updated value in the current render

  }

  function handleExpenseUpdates(event, index) {

    let updatedExpenses = [...expenses];
    let multiplier = (data.expenses[index].monthly) ? 12 : 1;
    updatedExpenses[index] = parseFloat(event.target.value) * multiplier;
    setExpenses(updatedExpenses);
    props.callback({incomes: incomes, expenses: updatedExpenses});  //make sure to use the new value here instead of the hook.
    // the hook does not reflect the updated value in the current render

  }

  return (
    <Card variant='outlined'>
      <CardHeader
        avatar={
          <Avatar>{(data.incomes && data.incomes.length > 0)?'+':'-'}</Avatar>
        }
        title={data.title}
      />
      <CardContent>
        {
          data.incomes &&
          data.incomes.map((income, index) => {
            return (
              <div>
                <TextField
                  variant="outlined"
                  label={income.title}
                  id={income.title}
                  onChange={(event) => handleIncomeUpdates(event, index)}
                />
                <br/>
              </div>
            )
          })
        }
        {
          data.expenses &&
          data.expenses.map((expense, index) => {
            return (
              <div>
                <TextField
                  variant="outlined"
                  label={expense.title}
                  id={expense.title}
                  onChange={(event) => handleExpenseUpdates(event, index)}
                /> <br/>
              </div>
            )
          })

        }

      </CardContent>
    </Card>

  );
}

export default TaxUnit