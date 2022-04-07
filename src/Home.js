import {Link} from "react-router-dom";


function Home() {
    return(
        <div>
            <body>
                <div>Welcome to FreakNet!</div>
                <Link to='Login'>Log In Here</Link>
            </body>
        </div>
    );
}

export default Home;