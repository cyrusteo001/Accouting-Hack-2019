import React from 'react'
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core'
import { Link } from 'react-router-dom';
import './NotFound.css'
export default function NotFound() {
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
            <div style={{ height: "100vh" }}>

                <div className="notfound-bg">
                    <div className="background-opacity">
                        <div className="notfound-text">
                            <Typography variant="h3" align="center" style={{ color: "white", borderRight: "1px solid white", paddingRight: 20 }}>
                                404
                            </Typography>
                            <Typography variant="h2" align="center" style={{ color: "white", fontWeight: "400", paddingLeft: 20 }}>
                                Not Found
                        </Typography>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
