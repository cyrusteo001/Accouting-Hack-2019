import React, { Component } from 'react'
import { AppBar, Container, Typography, Toolbar, Paper, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './About.css'
export class About extends Component {
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
                <div className="about-bg">
                    <div className="about-opacity" data-aos="fade" data-aos-duration="1000" style={{ paddingTop: 100, paddingBottom: 50 }}>
                        <Container>
                            <Paper elevation={10} style={{ padding: 10 }}>
                                <Typography variant="h4" color="textSecondary">
                                    About
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Optimizing human resource allocation
                                </Typography>
                                <Typography variant="body1" color="textSecondary" style={{ marginTop: 20 }}>
                                    Officia tempor pariatur cillum quis cillum veniam aliqua cupidatat et reprehenderit ad amet do. Dolore aliqua eu esse nulla nulla aute amet ullamco. Fugiat nulla qui velit culpa officia dolore voluptate nulla consequat aliquip incididunt officia qui ex. Aliqua sint veniam eu duis. Fugiat veniam tempor sint et. Do commodo magna sit fugiat mollit cupidatat reprehenderit. Deserunt id mollit est adipisicing exercitation irure eu magna et nostrud.
                               </Typography>
                                <Typography variant="body1" color="textSecondary" style={{ marginTop: 20 }}>
                                    Officia tempor pariatur cillum quis cillum veniam aliqua cupidatat et reprehenderit ad amet do. Dolore aliqua eu esse nulla nulla aute amet ullamco. Fugiat nulla qui velit culpa officia dolore voluptate nulla consequat aliquip incididunt officia qui ex. Aliqua sint veniam eu duis. Fugiat veniam tempor sint et. Do commodo magna sit fugiat mollit cupidatat reprehenderit. Deserunt id mollit est adipisicing exercitation irure eu magna et nostrud.
                               </Typography>
                                <Typography variant="body1" color="textSecondary" style={{ marginTop: 20 }}>
                                    Officia tempor pariatur cillum quis cillum veniam aliqua cupidatat et reprehenderit ad amet do. Dolore aliqua eu esse nulla nulla aute amet ullamco. Fugiat nulla qui velit culpa officia dolore voluptate nulla consequat aliquip incididunt officia qui ex. Aliqua sint veniam eu duis. Fugiat veniam tempor sint et. Do commodo magna sit fugiat mollit cupidatat reprehenderit. Deserunt id mollit est adipisicing exercitation irure eu magna et nostrud.
                               </Typography>
                            </Paper>

                        </Container>
                    </div>
                </div>
                <Container data-aos="fade" data-aos-duration="1000">
                    <Paper elevation={5} style={{ padding: 10, marginTop: 30 }}>
                        <Typography variant="h4" color="textSecondary">
                            Our team
                        </Typography>
                        <Grid container direction="row" justify="center" style={{ paddingTop: 20 }}>
                            <Grid item md={3}>
                                <div className="profile-container">
                                    <img src={require('../../Assets/guohui.jpg')} className="profile-picture" alt="" />
                                    <Typography variant="h5" align="center" color="textSecondary" style={{ paddingTop: 10 }}>
                                        Teo Guo Hui
                                </Typography>
                                    <Typography variant="h6" align="center" color="textSecondary">
                                        Business Lead
                                </Typography>
                                </div>
                            </Grid>
                            <Grid item md={3}>
                                <div className="profile-container">
                                    <img src={require('../../Assets/zhiwei.jpg')} className="profile-picture" alt="" />
                                    <Typography variant="h5" align="center" color="textSecondary" style={{ paddingTop: 10 }}>
                                        Chin Zhi Wei
                                </Typography>
                                    <Typography variant="h6" align="center" color="textSecondary">
                                        Machine Learning Developer
                                </Typography>
                                </div>
                            </Grid>
                            <Grid item md={3}>
                                <div className="profile-container">
                                    <img src={require('../../Assets/cyrus.jpg')} className="profile-picture" alt="" />
                                    <Typography variant="h5" align="center" color="textSecondary" style={{ paddingTop: 10 }}>
                                        Cyrus Teo
                                </Typography>
                                    <Typography variant="h6" align="center" color="textSecondary">
                                        Backend Developer
                                </Typography>
                                </div>
                            </Grid>
                            <Grid item md={3}>
                                <div className="profile-container">
                                    <img src={require('../../Assets/nigel.jpg')} className="profile-picture" alt="" />
                                    <Typography variant="h5" align="center" color="textSecondary" style={{ paddingTop: 10 }}>
                                        Nigel Lee
                                </Typography>
                                    <Typography variant="h6" align="center" color="textSecondary">
                                        Frontend Developer
                                </Typography>
                                </div>
                            </Grid>

                        </Grid>
                    </Paper>

                </Container>
            </div>
        )
    }
}

export default About
