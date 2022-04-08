import React from "react";
import App from "./App";
import { Link } from "react-router-dom";
import { Form, Button, Container, Col, Row, Card, Alert } from "react-bootstrap";
import Users from "./Users";
import users from "./Users";
class Login extends React.Component {
    constructor() {
        super();
    }

    checkLogin() {
        let password = (document.getElementById("formPassword")).value;
        let username = (document.getElementById("formUsername")).value;
        if (users.has(username) && users.get(username) == password) {
            return (
                <Alert variant="primary" dismissible>
                    <Alert.Heading>Access Granted!</Alert.Heading>
                </Alert>
            );
        }
        else {
            return (
                <Alert variant="danger" dismissible>
                    <Alert.Heading>Wrong username or password</Alert.Heading>
                </Alert>
            );
        }


    }
    render() {
        let accessMessage;
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
                    <br></br>
                    <Button variant="primary" type="submit" onClick={accessMessage = this.checkLogin} >
                        Submit
                    </Button>
                    <Link to="/Register">Not Registered?</Link>
                </Card>
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