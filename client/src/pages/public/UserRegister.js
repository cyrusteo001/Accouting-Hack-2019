import React, { Component } from 'react'
import { AppBar, Toolbar, Container, Typography, TextField, Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';

export class UserRegister extends Component {
    render() {
        return (
            <div>
                <AppBar color="secondary">
                    <Toolbar>
                        <Container>
                            <Typography variant="h6" color="textSecondary">
                                User Registration
                            </Typography>
                        </Container>
                    </Toolbar>
                </AppBar>
                <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", height: "100vh" }}>

                    <form noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h4" color="textSecondary">
                                    Register with us today!
                                </Typography>
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
                                    label="Email"
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
                                <Button variant="contained" color="primary" size="large" style={{ marginRight: 10 }}>
                                    Register
                                </Button>
                                <Button variant="outlined" size="large" style={{ marginRight: 10 }}>
                                    <Link to="/user/login" style={{ textDecoration: "none", color: "#888" }}>
                                        Back to Login
                                    </Link>
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </div>
        )
    }
}

export default UserRegister
