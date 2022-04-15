import Nick from '../images/nick.png'
import p1 from '../images/profile.jpg';
import p2 from '../images/profile5.png';
import p3 from '../images/profile2.png';
import p4 from '../images/profile3.png';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Col, Row, Card, Alert } from "react-bootstrap";
import users from "../Users";
import { bind } from 'browser-router/html5-history/adapter';




class Registration extends React.Component {
    constructor() {
        super();
        this.CheckPassword = this.CheckPassword.bind(this);
        this.register = this.register.bind(this);
        this.state = {userTable:users , loadAgain:false}

    }

    render() {

        return (
            <div className="text-center" style={{ marginLeft: "40%", marginTop: "10%" }}>
                <Card style={{ width: '20rem' }}>
                    <h1>
                        Welcome to FreakNet!
                    </h1>

                    <Form.Group className="loginForm" controlId="username_user">
                    <br/>
                        <Form.Control type="username" placeholder="Enter Username"></Form.Control>
                    </Form.Group>

                    <Form.Group className="loginForm" controlId="display" >
                    <br/>
                        <Form.Control type="username" placeholder="Enter your full name"></Form.Control>
                    </Form.Group>



                    <Form.Group className="loginForm" controlId="password_user">
                    <br/>
                        <Form.Control type="password" placeholder="Enter password"></Form.Control>
                    </Form.Group>

                    <Form.Group className="loginForm" controlId="v_password_user">
                    <br/>
                        <Form.Control type="password" placeholder="Enter password"></Form.Control>
                    </Form.Group>

                    <div class="mb-3">
                    <br/>
                        <input class="form-control" type="file" id="formFile" />
                    </div>


                    <Button variant="primary" type="submit" onClick={this.register} >
                        Submit
                    </Button>
                    
                    <br />
                    <Link to="/Login">Back To Login Page</Link>
                    
                </Card>
            </div>
        );


    }


    //checks valid password
    CheckPassword(pass, v_pass) {
        console.log("got into the check")
        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;
        //checks password has to have at least 8 characters and at most 16 characters
        if (pass.value.length < 8) {
            return 'password has to have at least 8 characters'
        }
        if (pass.value.length > 16) {
            return 'password has to have at most 16 characters'
        }
        //checks if only lower case
        if (!(pass.value.match((lowerCaseLetters)) && (pass.value.match(upperCaseLetters)) && (pass.value.match(numbers)))) {
            return 'password has to contain lower+upper case letters and numbers'
        }
        if (pass.value !== v_pass.value) {
            return 'passwords not match'
        }
        return true

    }

    //checks valid UserName or FullNAme
    CheckUserName(user) {
        if (user.value.length < 3) {
            return 'Username has to be at least than 3 letters'
        }
        if (user.value.length > 20) {
            return 'Username has to be at most than 20 letters'
        }
        //check if user already exist
        if (users.has(user.value)) {
            return 'Username is already taken'
        }
        return true
    }

    //main register function
    register() {
        var Username = document.getElementById("username_user")
        var PassWord = document.getElementById("password_user")
        var VerifyPassWord = document.getElementById("v_password_user")
        var fullName = document.getElementById("display")
        let validPass = this.CheckPassword(PassWord, VerifyPassWord)
        let validUsername = this.CheckUserName(Username)
        let validFullName = this.CheckUserName(fullName)
        if (validUsername !== true) {
            alert(validUsername)
            return
        }
        if (validPass !== true) {
            alert(validPass)
            return
        }
        if (validFullName !== true) {
            alert(validFullName)
            return
        }

        //SHOULD INSERT THE NEW CLIENT INTO THE MAP - BUT NOT REQUIRED
        // users.set(Username.value, PassWord.value);
        // this.setState(new Map(...userTable,))
        let oldUsers = this.state.userTable
        let newMember = [Username.value.toString(), [PassWord.value.toString(),fullName.value.toString(),{p1}]]
        let usersNew = new Map([...oldUsers,newMember])
        this.setState({userTable : usersNew})

        console.log(usersNew)
        console.log(this.state.userTable)
        console.log(this.state.userTable.get(Username.value))
        console.log(users)

        this.setState({loadAgain:true})
        alert("GOOD JOB!")
        this.setState({loadAgain:false})
        window.location.replace('/Login');
    }


}

export default Registration;






