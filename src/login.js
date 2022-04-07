import React from "react";
import App from "./App";
import { Link } from "react-router-dom";
import { Form, Button, Container, Col, Row, Card , Alert} from "react-bootstrap"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userPass: props.userPass, showFailAlert: false};
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
        } else {
            this.setState({showFailAlert: true})
        }
    }
    render() {
        const fail = this.state.showFailAlert;
        return (
            <div className="text-center" style={{marginLeft: "40%", marginTop: "10%"}}>
                <Card style={{ width: '20rem' }}>
                    <h1>
                        Welcome to FreakNet!
                    </h1>
                    <Form onSubmit={this.checkLogin}>
                        <Form.Group className="loginForm" controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter Username"></Form.Control>
                        </Form.Group>
                        <Form.Group className="loginForm" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password"></Form.Control>
                        </Form.Group>
                        <br></br>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <Link to="/Register">Not Registered?</Link>
                </Card>
                {fail &&  (
                <Alert variant="danger" dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                  Change this and that and try again. Duis mollis, est non commodo
                  luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                  Cras mattis consectetur purus sit amet fermentum.
                </p>
              </Alert> )}
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