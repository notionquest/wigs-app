import React, { Component } from "react"
import { Twitter, Facebook, Mail } from 'react-social-sharing'

class Sharing extends Component {
    constructor(props) {
        super();
        this.state = {
            wigInfo: props.wigInfo
        };
    }
    render() {
        return (
            <div>
                <Twitter solid small message={this.state.wigInfo.title} link={process.env.REACT_APP_HOME_URL} />
                <Facebook solid small message={this.state.wigInfo.title} link={process.env.REACT_APP_HOME_URL} />
                <Mail solidcircle small message={this.state.wigInfo.title} link={process.env.REACT_APP_HOME_URL}/>
            </div>
        );
    }
}

export default Sharing;