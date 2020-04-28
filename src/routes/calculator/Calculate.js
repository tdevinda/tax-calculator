import React, {useState, useEffect} from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import TaxUnit from "../../components/TaxUnit";
import Container from "@material-ui/core/Container/Container";
import { TAXUNITS } from './DummyTaxDetails';
import TaxDetailDisplay from "./TaxDetailDisplay";
import Grid from "@material-ui/core/Grid/Grid";

function Calculate() {
  let taxUnits = TAXUNITS;
  const [taxDetails, setTaxDetails] = useState(new Array(taxUnits.length));
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalConcession, setTotalConcession] = useState(0);

  useEffect(() => {
    updateTotals();
  });
  function updateTaxDetails(id, taxDetailsObject) {
    let updatedTaxDetails = [...taxDetails];
    updatedTaxDetails[id] = taxDetailsObject;
    setTaxDetails(updatedTaxDetails);

  }

  function updateTotals() {
    let totalCalculatedIncome = 0;
    let totalCalculatedConcessions = 0;
    // console.log(taxDetails);
    taxDetails.map((taxDetail, index) => {
      if(taxDetail && taxDetail.incomes) {
        taxDetail.incomes.map((item, i) => {
          totalCalculatedIncome += item?item:0;
        });
      }
      if (taxDetail && taxDetail.expenses) {
        taxDetail.expenses.map((item, i) => {
          totalCalculatedConcessions += item?item:0;
        });
      }
    });

    setTotalIncome(totalCalculatedIncome);
    setTotalConcession(totalCalculatedConcessions);
  }

  return (

    <Container>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <TaxDetailDisplay totalIncome={totalIncome} totalConcession={totalConcession}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">This is the calculation area</Typography>
          {
            taxUnits.map((unit, id) => {
              return (<TaxUnit taxunit={unit} callback={(taxDetail) => updateTaxDetails(id, taxDetail)}/>)
            })
          }
        </Grid>
      </Grid>

    </Container>



  )
}

export default Calculate