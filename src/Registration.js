import Login from "./Login";
import Landing from "./Landing.js";
import React from "react";


class Registration extends React.Component {
    constructor() {
        super();
        this.CheckPassword = this.CheckPassword.bind(this);
        this.register = this.register.bind(this);
    }

    render() {
        return (
            <div>
                <h1>
                    Welcome to FreakNet!
                </h1>
                <head>
                    <meta charset="utf-8" />
                    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <meta
                        name="description"
                        content="Web site created using create-react-app"
                    />
                    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                    <title>React App</title>
                </head>
                <body>
                    <noscript>You need to enable JavaScript to run this app.</noscript>
                    <div id="root"></div>
                    <div>
                        <label>Username</label>
                        <input id="username_user" form="text" placeholder="Enter your username" required />
                        <br />
                        <label>Password</label>
                        <input id="password_user" form="password" placeholder="Enter your password" required />
                        <br />
                        <label>Your Freaky Name</label>
                        <input id="display" form="text" placeholder="Enter your full name" required />
                        <br />
                        <button onClick={this.register}>Register</button>
                        <br />

                    </div>
                </body>
            </div>
        );


    }
    
    
        //checks valid password
        CheckPassword(pass) {
            console.log("got into the check")
            var lowerCaseLetters = /[a-z]/g;
            var upperCaseLetters = /[A-Z]/g;
            var numbers = /[0-9]/g;
            //checks password has to have at least 8 characters and at most 16 characters
            if (pass.value.length <= 8) {
                alert('password has to have at least 8 characters')
                return false
            }
            if (pass.value.length >= 16) {
                alert('password has to have at most 16 characters')
                return false
            }
            //checks if only lower case
            if (!(pass.value.match((lowerCaseLetters)) && (pass.value.match(upperCaseLetters)) && (pass.value.match(numbers)))) {
                alert('password has to contain lower+upper case letters and numbers')
                return false;
            }
            alert('GREAT JOB YOUNG MIDORIA!')
            return true
        }
    
        register() {
            var Username = document.getElementById("username_user")
            var PassWord = document.getElementById("password_user")
            var Display = document.getElementById("display")
            let valid = this.CheckPassword(PassWord)
        }
        hey(){
            alert('1111');
            console.log("hello");
        }


}

export default Registration;






