import React, { Component } from 'react'
import { AppBar, Toolbar, Container, Typography, TextField, Grid, Button, Snackbar, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

export class ForgotPassword extends Component {
    render() {
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                    }}
                    open={true}
                    autoHideDuration={6000}
                    message={
                        <span>This page is under construction</span>
                    }
                    // onClose={this.closeErrorDialogue.bind(this)}
                    action={[
                        <IconButton
                            aria-label="close"
                            color="primary"
                        // onClick={this.closeErrorDialogue.bind(this)}
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                >
                </Snackbar>
                <AppBar color="secondary">
                    <Toolbar>
                        <Container>
                            <Typography variant="h6" color="textSecondary">
                                Reset Password
                            </Typography>
                        </Container>
                    </Toolbar>
                </AppBar>
                <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", height: "100vh" }}
                    data-aos="fade" data-aos-duration="1000">


                    <form >
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="h4" color="textSecondary">
                                    Reset my password
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Link to="/" style={{ textDecoration: "none" }}>
                                    <Typography variant="h6" color="textSecondary" style={{ textAlign: "end", paddingTop: 7 }}>
                                        Back to home
                                </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    variant="outlined"
                                    label="Username"
                                    margin="normal"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    variant="outlined"
                                    label="Password"
                                    margin="normal"
                                    type="password"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    variant="outlined"
                                    label="Confirm Password"
                                    margin="normal"
                                    type="password"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" size="large" style={{ marginRight: 10, marginTop: 10 }}>
                                    Reset Password
                                </Button>

                                <Link to="/user/login" style={{ textDecoration: "none", color: "#888" }}>
                                    <Button variant="outlined" size="large" style={{ marginRight: 10, marginTop: 10 }}>
                                        Back to login
                                </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </form>

                </Container>
            </div>
        )
    }
}

export default ForgotPassword
