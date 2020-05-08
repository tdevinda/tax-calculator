import React, {useState, useEffect} from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import TaxUnit from "../../components/TaxUnit";
import Container from "@material-ui/core/Container/Container";
import { TAXUNITS } from './DummyTaxDetails';
import TaxDetailDisplay from "./TaxDetailDisplay";
import Grid from "@material-ui/core/Grid/Grid";
import { calculateTax} from "../../components/Calculations";

function Calculate() {
  let taxUnits = TAXUNITS;
  const [taxDetails, setTaxDetails] = useState(taxUnits);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalConcession, setTotalConcession] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);


  function updateTaxDetails(id, taxDetailsObject) {
    let updatedTaxDetails = [...taxDetails];
    updatedTaxDetails[id] = taxDetailsObject;
    setTaxDetails(updatedTaxDetails);

  }
  //when details are updated anytime, rin the total update function
  useEffect(() => {
    updateTotals();
  });

  function updateTotals() {
    console.log(taxDetails);
    let taxOutcome = calculateTax(taxDetails);
    setTotalIncome(taxOutcome.totalIncomes);
    setTotalPayable(taxOutcome.totalTax);
    setTotalConcession(taxOutcome.totalConcessions);

  }

  return (

    <Container>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <TaxDetailDisplay totalIncome={totalIncome} totalConcession={totalConcession} totalPayable={totalPayable}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">This is the calculation area</Typography>
          {
            taxUnits.map((unit, id) => {
              return (<TaxUnit id={id} taxunit={unit} callback={(updatedTaxUnit) => updateTaxDetails(id, updatedTaxUnit)}/>)
            })
          }
        </Grid>
      </Grid>

    </Container>



  )
}

export default Calculate