

function Login() {
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
                <input type="button" value="     go     " onclick="window.location.href= 'https://www.google.com/';" /><br></br>
            </form>
            <div>
                <link href="https://www.google.com/" value="  not registered?  " />
            </div>
        </body>
    );
}

export default Login;