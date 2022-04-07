import React from "react";
import App from "./App";
import {Link} from "react-router-dom";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userPass: props.userPass };
        console.log(this.state.userPass);
        this.checkLogin = this.checkLogin.bind(this);
    }
    checkLogin() {
        let password = (document.getElementById("password")).value;
        let username = (document.getElementById("username")).value;
        console.log(username + password);
        if (this.state.userPass.has(username) && this.state.userPass.get(username) == password) {
            console.log("in");
            alert("access granted")
        }
    }
    render() {
        return (
            <body>
                <h1>
                    Welcome to FreakNet!
                </h1>
                <form onSubmit={this.checkLogin}>
                    <label for="uname"> Username: </label>
                    <input type="text" placeholder="your username here" id="username"></input>  <br />
                    <label for="psswd">Password: </label>
                    <input type="text" placeholder="your password here" id="password" /> <br></br> <br></br>
                    <input type="submit" value="Login" /><br></br>
                </form>
                <Link to="/Register">Not Registered?</Link>
            </body>
        );
    }
}

export default Login;