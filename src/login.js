
import React from "react";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userPass : props.userPass};
        console.log(this.state.userPass);
        this.checkLogin = this.checkLogin.bind(this);
    }
    checkLogin() {
       let password = document.getElementById("password").value;
       let username = document.getElementById("username").value;
    }
    render(){
    return (
        <body>
            <h1>
                Welcome to FreakNet!
            </h1>
            <form>
                <label for="uname"> Username: </label>
                <input type="text" placeholder="your username here" id="username"></input>  <br />
                <label for="psswd">Password: </label>
                <input type="text" placeholder="your password here" id="password" /> <br></br> <br></br>
                <input type="button" value="Login" onClick={this.checkLogin}/><br></br>
            </form>

        </body>
    );
}
}

export default Login;