import Typography from "@material-ui/core/Typography/Typography";
import Link from "@material-ui/core/Link/Link";
import React from "react";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://lankaincome.tax/">
        LankaIncome.tax
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}