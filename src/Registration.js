import Login from "./Login";
import Landing from "./Landing.js";
import React from "react";


class Registration extends React.Component {
    constructor() {
        super();
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
                        <label>Display name</label>
                        <input id="display" form="text" placeholder="Enter your full name" required />
                        <br />
                        <input type="button" onclick="register()" value="Register" />
                        <br />
                        
                    </div>
                    
                    <script src="./Login"></script>
                </body>
            </div>
        );
    }



}

export default Registration;