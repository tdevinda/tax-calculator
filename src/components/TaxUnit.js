import React from 'react';
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Avatar from "@material-ui/core/Avatar/Avatar";
import TextField from "@material-ui/core/TextField/TextField";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Button from "@material-ui/core/Button/Button";


function getConcessionAmount(taxunit) {

}

function TaxUnit(props) {


  let data = props.taxunit;
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
                <TextField variant="outlined" label={income.title} id={income.title}  /> <br/>
              </div>
            )
          })
        }
        {
          data.expenses &&
          data.expenses.map((expense, index) => {
            return (
              <div>
                <TextField variant="outlined" label={expense.title} id={expense.title}  /> <br/>
              </div>
            )
          })

        }
        <Button onClick={() => props.callback(data)}>Click me</Button>
      </CardContent>
    </Card>

  );
}

export default TaxUnit