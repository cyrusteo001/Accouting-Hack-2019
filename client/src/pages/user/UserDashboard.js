import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ResponsiveDrawer from '../../components/ResponsiveDrawer';

export class UserDashboard extends Component {

    render() {
        const component = () => {
            return (
                <div>
                    <h1>hello</h1>
                </div>
            )
        }
        return (
            <div>
                {/* <CustomAppBar /> */}
                <ResponsiveDrawer componentRender={component} />
            </div>
        )
    }
}

export default withRouter(UserDashboard)
