import React, { useState } from "react";
import App, { buttonLogin } from "../App";
import { Link } from "react-router-dom";
import { Form, Button, Container, Col, Row, Card, Alert } from "react-bootstrap";
import users from "../Users";




export default function Chat() {


    const [accessSuccess, setSuccess] = useState(false);
    const [accessFail, setFail] = useState(false);
    const [lUsers, setUsers] = useState(users);

    const  checkLogin = ()=> {
        let password = (document.getElementById("formPassword")).value;
        let username = (document.getElementById("formUsername")).value;
        console.log(lUsers)
        console.log(users)
        if (lUsers.has(username) && lUsers.get(username).at(0) == password) {
            setSuccess(true);
            setTimeout(() => { window.location.replace('/Chat')}, 500);
        }
        else {
            setFail(true);
        }
    }

    
    return(
        <div className="text-center" style={{ marginLeft: "40%", marginTop: "10%" }}>

        <Card style={{ width: '20rem' }}>
            <h1>
                Welcome to FreakNet!
            </h1>

            <Form.Group className="loginForm" controlId="formUsername">
            <br/>
                <Form.Control type="username" placeholder="Enter Username"></Form.Control>
            </Form.Group>


            <Form.Group className="loginForm" controlId="formPassword">
            <br/>
                <Form.Control type="password" placeholder="Enter Password"></Form.Control>
            </Form.Group>


            <br/>
            <Button variant="primary" type="submit" onClick={()=> (checkLogin())} class="buttonLogin">
                Submit
            </Button>

            <Alert show={accessSuccess} onClose={() => ( setSuccess(false))} variant="primary" dismissible>
                <Alert.Heading>Access Granted!</Alert.Heading>
            </Alert>
            <Alert show={accessFail} onClose={() => setFail(false)} variant="danger" dismissible>
                <Alert.Heading>Wrong Username or Password</Alert.Heading>
            </Alert>

        </Card>
        <br />
        <Link to="/Register" style={{ marginLeft: "-60%" }}>Not Registered?</Link>
    </div>
    );
}


// class Login extends React.Component {
//     constructor() {
//         super();
//         this.state = { accessSuccess: false, accessFail: false , suersList : users};
//         this.checkLogin = this.checkLogin.bind(this);
//     }

//     checkLogin() {
//         let password = (document.getElementById("formPassword")).value;
//         let username = (document.getElementById("formUsername")).value;
//         console.log(this.state.suersList)
//         console.log(users)
//         if (this.state.suersList.has(username) && this.state.suersList.get(username).at(0) == password) {
//             this.setState({ accessSuccess: true });
//             setTimeout(() => { window.location.replace('/Chat')}, 500);
//         }
//         else {
//             this.setState({ accessFail: true });
//         }
//     }
//     render() {

//         return (
//             <div className="text-center" style={{ marginLeft: "40%", marginTop: "10%" }}>

//                 <Card style={{ width: '20rem' }}>
//                     <h1>
//                         Welcome to FreakNet!
//                     </h1>

//                     <Form.Group className="loginForm" controlId="formUsername">
//                     <br/>
//                         <Form.Control type="username" placeholder="Enter Username"></Form.Control>
//                     </Form.Group>


//                     <Form.Group className="loginForm" controlId="formPassword">
//                     <br/>
//                         <Form.Control type="password" placeholder="Enter Password"></Form.Control>
//                     </Form.Group>


//                     <br/>
//                     <Button variant="primary" type="submit" onClick={this.checkLogin} class="buttonLogin">
//                         Submit
//                     </Button>

//                     <Alert show={this.state.accessSuccess} onClose={() => { setTimeout(() => { this.setState({ accessSuccess: false }) }, 1) }} variant="primary" dismissible>
//                         <Alert.Heading>Access Granted!</Alert.Heading>
//                     </Alert>
//                     <Alert show={this.state.accessFail} onClose={() => this.setState({ accessFail: false })} variant="danger" dismissible>
//                         <Alert.Heading>Wrong Username or Password</Alert.Heading>
//                     </Alert>

//                 </Card>
//                 <br />
//                 <Link to="/Register" style={{ marginLeft: "-60%" }}>Not Registered?</Link>
//             </div>
//         );
//     }
// }




{/* <label for="uname"> Username: </label>
                    <input type="text" placeholder="your username here" id="username"></input>  <br />
                    <label for="psswd">Password: </label>
                    <input type="text" placeholder="your password here" id="password" /> <br></br> <br></br>
                    <input type="submit" value="Login" /><br></br> */}