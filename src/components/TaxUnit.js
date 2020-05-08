import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import styles from './TaxUnit.styles';
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Avatar from "@material-ui/core/Avatar/Avatar";
import TextField from "@material-ui/core/TextField/TextField";
import CardContent from "@material-ui/core/CardContent/CardContent";
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles(styles)

function TaxUnit(props) {
  const classes = useStyles();
  let data = props.taxunit;

  const [incomes, setIncomes] = useState(data.incomes);
  const [expenses, setExpenses] = useState(data.expenses);
  
  function handleIncomeUpdates(event, index) {
    let updateIncomes = [...incomes];
    // console.log(parseFloat(event.target.value) + '*' + multiplier + '=' + (parseFloat(event.target.value) * multiplier));
    updateIncomes[index].value = parseFloat(event.target.value);
    setIncomes(updateIncomes);
    data.incomes = updateIncomes;
    data.expenses = expenses;
    props.callback(data); //make sure to use the new value here instead of the hook.
        // the hook does not reflect the updated value in the current render

  }

  function handleExpenseUpdates(event, index) {

    let updatedExpenses = [...expenses];
    updatedExpenses[index].value = parseFloat(event.target.value);
    setExpenses(updatedExpenses);
    data.incomes = incomes;
    data.expenses = updatedExpenses;
    props.callback(data);  //make sure to use the new value here instead of the hook.
    // the hook does not reflect the updated value in the current render

  }

  function handleMonthlyIncomeChange(event, index) {
    let updatedIncomes = [...incomes];
    updatedIncomes[index].monthly = event.target.checked;
    setIncomes(updatedIncomes);
    data.incomes = updatedIncomes;
    data.expenses = expenses;
    props.callback(data);
  }

  function handleMonthlyExpenseChange(event, index) {
    let updatedExpenses = [...expenses];
    updatedExpenses[index].monthly = event.target.checked;
    setExpenses(updatedExpenses);
    data.incomes = incomes;
    data.expenses = updatedExpenses;
    props.callback(data);
  }

  return (
    <Card variant='outlined' className={classes.cardBorders}>
      <CardHeader
        avatar={
          <Avatar>{(data.incomes && data.incomes.length > 0)?'+':'-'}</Avatar>
        }
        title={data.title}
      />
      <CardContent>
        {
          incomes &&
          incomes.map((income, index) => {
            return (
              <div className={classes.content}>
                <TextField
                  variant="outlined"
                  label={income.title}
                  id={income.title}
                  onChange={(event) => handleIncomeUpdates(event, index)}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={incomes[index].monthly}
                      onChange={(event) => {
                        handleMonthlyIncomeChange(event, index);
                      }}
                      color="primary"
                      className={classes.monthlyOptionCheckmark}
                    />
                  }
                  label="Monthly value"
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
              <div className={classes.content}>
                <TextField
                  variant="outlined"
                  label={expense.title}
                  id={expense.title}
                  onChange={(event) => handleExpenseUpdates(event, index)}
                />
                <FormControlLabel
                control={
                  <Checkbox
                    checked={expenses[index].monthly}
                    onChange={(event) => handleMonthlyExpenseChange(event, index)}
                    color="primary"
                    className={classes.monthlyOptionCheckmark}
                  />
                }
                label="Monthly value"
              />
                <br/>
              </div>
            )
          })

        }

      </CardContent>
    </Card>

  );
}

export default TaxUnit