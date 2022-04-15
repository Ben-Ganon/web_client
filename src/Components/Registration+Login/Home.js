import {Link,useNavigate} from "react-router-dom";
import { Form, Button, Container, Col, Row, Card, Alert } from "react-bootstrap";

function Home() {
    let navigate = useNavigate();
    const  moveToLogin = ()=> {
        navigate("/Login");
    }
    const  moveToRegister = ()=> {
        navigate("/Register");
    }


    return(
        <div className="text-center" style={{ marginLeft: "40%", marginTop: "10%" }}>
        <Card style={{ width: '20rem' }}>
            <h1>
                Welcome to FreakNet!
            </h1>
            <br />
            <Button variant="primary" type="submit" onClick={moveToLogin} class="buttonLogin"  >
            Login
            </Button>
            <br />
            <Button variant="primary" type="submit" onClick={moveToRegister} class="buttonLogin"  >
            Register
    </Button>


        </Card>
    </div>
    );
}

export default Home;