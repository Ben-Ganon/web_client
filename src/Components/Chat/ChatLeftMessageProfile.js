
import React from "react";
import { Form, Button, Container, Col, Row, Card, Alert } from "react-bootstrap";
import Nick from '../images/nick.png';
class ChatLeftMessageProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: props.username};
        this.username = props.username;
        this.img = props.img;
        this.lastMassage = props.lastMassage;
        this.time = props.time;

    }

    render() {
        return (
            <Card style={{background:"#99e6ff", height: "90%", border: '2px solid #b3d9ff'}}>
              <div class="d-flex w-100 justify-content-between" style={{background: "#99ccff", height: "90%"}}>
              <span><img class="profile-image" src={this.img} alt=""/>
                </span>
                <h5>{this.username}</h5>
                <small>{this.time}</small>
              </div>
              <div class="mb-1" style={{textAlign: "center" ,background: "#99ccff"}}>{this.lastMassage}</div>
          </Card> 
         
        );


    }
}

export default ChatLeftMessageProfile;






