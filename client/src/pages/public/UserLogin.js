import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';
import {
    AppBar,
    Toolbar,
    Container,
    Typography,
    TextField,
    Grid,
    Button,
    Snackbar,
    IconButton,
    CircularProgress
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';


export class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginError: this.props.error,
            loading: false,
            login: false,
            username: "",
            password: ""
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
        const user = {
            name: this.state.username,
            password: this.state.password
        }

        this.props.loginUser(user)
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
                                User Login
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
                                    label="Username"
                                    margin="normal"
                                    name="username"
                                    fullWidth
                                    onChange={this.handleChange.bind(this)}
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
                                    fullWidth
                                    onChange={this.handleChange.bind(this)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    style={{ marginRight: 10, marginTop: 10 }}
                                    onClick={this.handleSubmit.bind(this)}
                                    type="submit"
                                >
                                    Login
                                </Button>
                                <Link to="/user/register" style={{ textDecoration: "none", color: "#888" }}>
                                    <Button variant="outlined" size="large" style={{ marginRight: 10, marginTop: 10 }}>
                                        Register
                                </Button>
                                </Link>
                                <Link to="/forgotpassword" style={{ textDecoration: "none" }}>
                                    <Button variant="outlined" color="primary" size="large" style={{ marginTop: 10 }}>
                                        Forgot Password
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

export default withRouter(connect(mapStateToProps, { loginUser })(UserLogin));
