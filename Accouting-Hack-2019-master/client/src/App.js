import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// ANIMATE ON SCROLL
import AOS from 'aos';
import 'aos/dist/aos.css';

// MATERIAL UI PROVIDERS
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// REDUX STORE
import { Provider } from "react-redux";
import store from './redux/store';

// PAGES
import LandingPage from './pages/public/LandingPage';
import UserLogin from './pages/public/UserLogin';
import UserRegister from './pages/public/UserRegister';
import About from './pages/public/About';
import NotFound from './pages/public/NotFound';
import ForgotPassword from './pages/public/ForgotPassword';
import UserDashboard from './pages/user/UserDashboard';

import './App.css'

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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/user/login" exact component={UserLogin} />
              <Route path="/user/register" exact component={UserRegister} />
              <Route path="/about" exact component={About} />
              <Route path="/forgotpassword" exact component={ForgotPassword} />
              <Route path="/user/dashboard" component={UserDashboard} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default App
