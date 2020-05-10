import React, { useContext } from 'react'
import styles from './Login.styles';
import {AuthContext, AuthProvider} from "../../components/Auth";
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button/Button";
import firebaseApp from '../../components/FirebaseModule';
import firebase from 'firebase';
import {HOME_PATH} from "../../navi/paths";
import {Redirect} from "react-router-dom";
import Container from "@material-ui/core/Container/Container";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import Link from "@material-ui/core/Link/Link";
import Copyright from "../../components/Copyright";

const useStyles = makeStyles(styles);

function Login() {
  const classes = useStyles();
  const {currentUser} = useContext(AuthContext);


  function handleGoogleAuth() {
    let auth = firebaseApp.auth();
    let authProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(authProvider).then((result) => {
      console.log(result);
    }).catch((reason) => {
      console.log(reason);
    });

  }

  return (
    currentUser ? (
      <Redirect to={HOME_PATH}/>
    ): (
      <>
        <Grid container spacing={2}>
          <Grid item md={6} sm={12}>
            <div className={classes.heroContent}>
              <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                  Basic Income Tax Calculator
                </Typography>
                <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
                  for Sri Lankan Income Tax Payers
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  This project aims to simplify the income tax calculation for people who have been used to paying PAYE tax
                  from their workplaces. It will give you an idea on how much you need to pay, and help you decide whether its
                  profitable to go for a tax consultant.
                </Typography>

              </Container>
            </div>
          </Grid>
          <Grid md={6} sm={12}>
            <Container className={classes.heroContent}>
              <Button variant="contained" color="primary" onClick={handleGoogleAuth}>
                Login with Google to continue
              </Button>
            </Container>
          </Grid>
        </Grid>
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
      </>
    )


  )
}

export default Login;