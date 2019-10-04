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
                            <Link to="/user/login" style={{ textDecoration: "none", marginLeft: "auto" }}>
                                <Typography variant="h6" color="textSecondary" style={{ marginLeft: 10 }}>
                                    Login
                                </Typography>
                            </Link>
                        </Container>
                    </Toolbar>
                </AppBar>
                <div >
                    <div className="landing-bg">
                    </div>

                    <div className="responsive-video">
                        <video autoPlay muted loop className="video-item">
                            <source src={require('../../Assets/Landing.mp4')} type="video/mp4" />
                        </video>
                    </div>
                    <Grid data-aos="fade" data-aos-duration="1000" container spacing={1} className="landing-title text-center" >
                        <Grid item xs={12}>
                            <Typography variant="h4">
                                Accounting Inovation Challenge 2019
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h4">
                                Optimising human resource for accounting firms
                                </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h4" style={{ marginTop: 40, marginBottom: 10 }}>
                                I am a...
                            </Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <Link to="/user/login" style={{ textDecoration: "none", color: "#444" }}>
                                <Button variant="contained" color="secondary" style={{ marginRight: 20, width: 160, height: 60, fontSize: 20 }}>

                                    Freelancer

                            </Button>
                            </Link>
                            <Link to="/corporate/login" style={{ textDecoration: "none", color: "white" }} >
                                <Button variant="contained" color="primary" style={{ marginLeft: 20, width: 150, height: 60, fontSize: 20 }}>
                                    Hirer
                            </Button>
                            </Link>
                        </Grid>
                    </Grid>

                </div>
            </div>
        )
    }
}

export default LandingPage
