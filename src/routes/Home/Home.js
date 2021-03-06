import React from 'react';
import styles from './Home.styles'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Copyright from "../../components/Copyright";
import {CALCULATOR_PATH} from "../../navi/paths";

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <main>

        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome to lankaincome.tax
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              This project aims to simplify the income tax calculation for people who have been used to paying PAYE tax
              from their workplaces. It will give you an idea on how much you need to pay, and help you decide whether its
              profitable to go for a tax consultant.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" component={Link} to={CALCULATOR_PATH}>
                    Go to calculation
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Know more
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Please note;
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          This is a hobbyist project. lankaincome.tax does not take any responsibility for errors in calculation.
          <br/>
          This is a open source development. Head over to our <Link to='https://github.com/tdevinda/tax-calculator'>Github page</Link> for more
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}