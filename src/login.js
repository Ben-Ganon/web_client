
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userPass : props.userPass};
        console.log(this.state.userPass);
        this.checkLogin = this.checkLogin.bind(this);
    }
    checkLogin(password) {
       password = document.getElementById;
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
            <div>
                <link href="https://www.google.com/" value="  not registered?  " />
            </div>
        </body>
    );
}

export default Login;