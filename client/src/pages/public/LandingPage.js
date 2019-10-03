import React, { Component } from 'react'
import { AppBar, Toolbar, Button, Grid, Typography, Container } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export class LandingPage extends Component {
    render() {
        return (
            <div>
                <AppBar color="secondary">
                    <Toolbar>
                        <Container style={{ display: "flex" }}>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <Typography variant="h6" color="textSecondary" style={{ marginRight: 10 }}>
                                    Home
                                </Typography>
                            </Link>

                            <Link to="/about" style={{ textDecoration: "none" }}>
                                <Typography variant="h6" color="textSecondary" style={{ marginLeft: 10 }}>
                                    About
                                </Typography>
                            </Link>
                        </Container>
                    </Toolbar>
                </AppBar>
                <div style={{ position: "relative" }}>
                    <div className="responsive-video">
                        <video autoPlay muted loop className="video-item">
                            <source src={require('../../Assets/Landing.mp4')} type="video/mp4" />
                        </video>
                    </div>
                    <Grid container spacing={0} className="landing-title text-center" >
                        <Grid item xs={12}>
                            <h1>Accounting Hack 2019</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <h1>Optimising human resource for accounting firms</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <h2>I am a...</h2>
                        </Grid>
                        <Grid item xs={12} justify="center">
                            <Button variant="contained" color="secondary" style={{ marginRight: 20, width: 150, height: 60, fontSize: 20 }}>
                                <Link to="/user/login" style={{ textDecoration: "none", color: "#444" }}>
                                    Freelancer
                                </Link>
                            </Button>
                            <Button variant="contained" color="primary" style={{ marginLeft: 20, width: 150, height: 60, fontSize: 20 }}>
                                <Link to="/corporate/login" style={{ textDecoration: "none", color: "white" }} >
                                    Hirer
                                </Link>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default LandingPage
