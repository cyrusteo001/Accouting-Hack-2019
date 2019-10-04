import React, { Component } from 'react'
import { AppBar, Toolbar, Container, Typography, TextField, Grid, Button, CircularProgress, IconButton, Snackbar } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser } from '../../redux/actions/authActions';

export class UserRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginError: this.props.error,
            loading: false,
            login: false,
            username: "",
            password: "",
            confirmPassword: ""
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.error) {
            this.setState({ loginError: nextProps.error })
        }
        if (!nextProps.loading) {
            this.setState({ loading: false })
        }
        if (nextProps.loading) {
            this.setState({ loading: true })
        }
        if (nextProps.isLoggedIn) {
            this.setState({ login: true })
            this.props.history.push('/user/dashboard')
        }
    }

    closeErrorDialogue() {
        this.setState({ loginError: false })
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit() {
        this.setState({ loading: true })
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({ loginError: "Passwords do not match", loading: false })
            return;
        }
        const user = {
            name: this.state.username,
            password: this.state.password
        }

        this.props.createUser(user)
    }

    renderLoadingScreen() {
        if (this.state.loading) {
            return (
                <div className="loading-screen">
                    <CircularProgress color="secondary" />
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderLoadingScreen()}
                <Snackbar
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                    }}
                    open={this.state.loginError}
                    autoHideDuration={6000}
                    message={
                        <span>{this.state.loginError}</span>
                    }
                    onClose={this.closeErrorDialogue.bind(this)}
                    action={[
                        <IconButton
                            aria-label="close"
                            color="primary"
                            onClick={this.closeErrorDialogue.bind(this)}
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
                                User Registration
                            </Typography>
                        </Container>
                    </Toolbar>
                </AppBar>
                <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", height: "100vh" }}
                    data-aos="fade" data-aos-duration="1000"
                >

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
                                    name="username"
                                    onChange={this.handleChange.bind(this)}
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
                                    name="password"
                                    onChange={this.handleChange.bind(this)}
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
                                    name="confirmPassword"
                                    onChange={this.handleChange.bind(this)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" size="large" style={{ marginRight: 10 }} type="submit" onClick={this.handleSubmit.bind(this)}>
                                    Register
                                </Button>

                                <Link to="/user/login" style={{ textDecoration: "none", color: "#888" }}>
                                    <Button variant="outlined" size="large" style={{ marginRight: 10 }}>
                                        Back to Login
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

const mapStateToProps = ({ auth }) => {
    const { name, email, password, error, loading, isLoggedIn } = auth;
    return { name, email, password, error, loading, isLoggedIn }
};


export default connect(mapStateToProps, { createUser })(UserRegister)
