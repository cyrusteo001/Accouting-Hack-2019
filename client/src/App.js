import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CustomAppBar from './components/CustomAppBar';
import LandingPage from './pages/public/LandingPage';

import './App.css'
import UserLogin from './pages/public/UserLogin';
import UserRegister from './pages/public/UserRegister';
import About from './pages/public/About';
import NotFound from './pages/public/NotFound';

const theme = createMuiTheme({
  palette: {
    primary: { main: "#ef5350" },
    secondary: { main: "#ffebee" },
  },
  status: {
    danger: 'orange',
  },
});

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
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
