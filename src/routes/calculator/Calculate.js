import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import TaxUnit from "../../components/TaxUnit";
import Container from "@material-ui/core/Container/Container";
import { TAXUNITS } from './DummyTaxDetails';

function setTaxDetails(id, taxDetails, taxDetailsObject) {
  console.log(id);
  console.log(taxDetailsObject);
  taxDetails[id] = taxDetailsObject;
}


function Calculate() {
  let taxDetails = [];
  let taxUnits = TAXUNITS;

  return (

    <Container>
      <Typography variant="h6">This is the calculation area</Typography>
      {
        taxUnits.map((unit, id) => {
          taxDetails.push({});
          return (<TaxUnit taxunit={unit} callback={(taxDetail) => setTaxDetails(id, taxDetails, taxDetail)}/>)
        })
      }

    </Container>



  )
}

export default Calculate