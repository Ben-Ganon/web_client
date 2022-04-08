import React, { useState } from "react";
import App, { buttonLogin } from "./App";
import { Link } from "react-router-dom";
import { Form, Button, Container, Col, Row, Card, Alert } from "react-bootstrap";
import users from "./Users";

import React from "react";
class Login extends React.Component {
    constructor() {
        super();
        this.state = { accessSuccess: false, accessFail: false };
        this.checkLogin = this.checkLogin.bind(this);
    }

    checkLogin() {
        let password = (document.getElementById("formPassword")).value;
        let username = (document.getElementById("formUsername")).value;
        if (users.has(username) && users.get(username) == password) {
            this.setState({ accessSuccess: true });
            setTimeout(() => { window.location.replace('/Chat') }, 500);
        }
        else {
            this.setState({ accessFail: true });
        }
    }
    render() {

        return (
            <div className="text-center" style={{ marginLeft: "40%", marginTop: "10%" }}>

                <Card style={{ width: '20rem' }}>
                    <h1>
                        Welcome to FreakNet!
                    </h1>

                    <Form.Group className="loginForm" controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter Username"></Form.Control>
                    </Form.Group>


                    <Form.Group className="loginForm" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password"></Form.Control>
                    </Form.Group>



                    <Button variant="primary" type="submit" onClick={this.checkLogin} class="buttonLogin">
                        Submit
                    </Button>

                    <Alert show={this.state.accessSuccess} onClose={() => { setTimeout(() => { this.setState({ accessSuccess: false }) }, 1500) }} variant="primary" dismissible>
                        <Alert.Heading>Access Granted!</Alert.Heading>
                    </Alert>
                    <Alert show={this.state.accessFail} onClose={() => this.setState({ accessFail: false })} variant="danger" dismissible>
                        <Alert.Heading>Wrong Username or Password</Alert.Heading>
                    </Alert>

                </Card>
                <br />
                <Link to="/Register" style={{ marginLeft: "-60%" }}>Not Registered?</Link>
            </div>
        );
    }
}

export default Login;



{/* <label for="uname"> Username: </label>
                    <input type="text" placeholder="your username here" id="username"></input>  <br />
                    <label for="psswd">Password: </label>
                    <input type="text" placeholder="your password here" id="password" /> <br></br> <br></br>
                    <input type="submit" value="Login" /><br></br> */}