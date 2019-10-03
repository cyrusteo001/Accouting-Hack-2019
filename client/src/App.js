import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';



import './App.css'
import LandingPage from './pages/public/LandingPage';
import UserLogin from './pages/public/UserLogin';
import UserRegister from './pages/public/UserRegister';
import About from './pages/public/About';
import NotFound from './pages/public/NotFound';
import ForgotPassword from './pages/public/ForgotPassword';

const theme = createMuiTheme({
  palette: {
    primary: { main: "#ef5350" },
    secondary: { main: "#ffebee" },
  },
  status: {
    danger: 'orange',
  },
});

AOS.init();

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/user/login" exact component={UserLogin} />
            <Route path="/user/register" exact component={UserRegister} />
            <Route path="/about" exact component={About} />
            <Route path="/forgotpassword" exact component={ForgotPassword} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
