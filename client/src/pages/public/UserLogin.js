import React, { Component } from 'react'
import { AppBar, Toolbar, Container, Typography, TextField, Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';

export class UserLogin extends Component {
    render() {
        return (
            <div>
                <AppBar color="secondary">
                    <Toolbar>
                        <Container>
                            <Typography variant="h6" color="textSecondary">
                                User Login
                            </Typography>
                        </Container>
                    </Toolbar>
                </AppBar>
                <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", height: "100vh" }}>


                    <form noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="h4" color="textSecondary">
                                    Welcome!
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
                                    label="Username / Email"
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
                                <Button variant="contained" color="primary" size="large" style={{ marginRight: 10, marginTop: 10 }}>
                                    Login
                                </Button>
                                <Button variant="outlined" size="large" style={{ marginRight: 10, marginTop: 10 }}>
                                    <Link to="/user/register" style={{ textDecoration: "none", color: "#888" }}>
                                        Register
                                    </Link>
                                </Button>
                                <Button variant="outlined" color="primary" size="large" style={{ marginTop: 10 }}>
                                    Forgot Password
                                </Button>
                            </Grid>
                        </Grid>
                    </form>

                </Container>
            </div>
        )
    }
}

export default UserLogin
