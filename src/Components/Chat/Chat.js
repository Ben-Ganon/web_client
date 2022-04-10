import React from "react";
import Nick from '../images/nick.png';
import p1 from '../images/profile.jpg';
import p2 from '../images/profile5.png';
import p3 from '../images/profile2.png';
import p4 from '../images/profile3.png';
import ChatLeftMessageProfile from './ChatLeftMessageProfile'
import { Link } from "react-router-dom";
import { Form, Button, Container, Col, Row, Card, Alert } from "react-bootstrap";
import "./Chat.css"
class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: props.username };

  }
  render() {
    return (
      <div class="Container" style={{ background: "pink", height: "90%" }}>
        <div class="row no-gutters" style={{ background: "#66b3ff", height: "70%" }}>
          <div class="col-md-4 border-right" style={{ background: "blue", height: "80%" }}>
            <div class="settings-tray">
              <img class="profile-image" src={p1} alt="Profile img" />
              <span class="settings-tray--right">
                <span class="material-icons">Sagiv</span>
                <Button variant="primary" type="submit">+</Button>
              </span>
            </div>
            <div class="search-box">
              <div class="input-wrapper">

                <input placeholder="Search here" type="text" />
              </div>
            </div>
            <div style={{ overflowY: "scroll", background: "black", color: "white", height: "50%" }}>
              <ChatLeftMessageProfile img={Nick} username={"Ben Ganon"} lastMassage={"sup?"} time={"13:45"} />
              <ChatLeftMessageProfile img={p1} username={"Sagiv Antebi"} lastMassage={"yo?"} time={"12:10"} />
              <ChatLeftMessageProfile img={p2} username={"Sahar Rofe"} lastMassage={"how are you dion?"} time={"11:45"} />
              <ChatLeftMessageProfile img={p3} username={"Omri Ben Hemo"} lastMassage={"fu!"} time={"10:55"} />
              <ChatLeftMessageProfile img={p4} username={"Uri Greitzer "} lastMassage={"sup?"} time={"10:45"} />
              <ChatLeftMessageProfile img={p1} username={"Sagiv Ante"} lastMassage={"sup?"} time={"9:45"} />
              <ChatLeftMessageProfile img={p2} username={"Sahar Rofe"} lastMassage={"sup?"} time={"8:20"} />
            </div>
          </div>
          <div class="col-md-8">
            <ChatBar nickname={"yyy"}/>
            <div class="chat-panel">
              <Message message={"hi"} side={"right"} />
              <Message message={"hi"} side={"left"} />
              <Message message={"hi hello whats up"} side={"right"} />
              <Message message={"hi"} side={"left"} />
              <Message message={"hi"} side={"right"} />
              <Message message={"hi"} side={"left"} />
              <div class="row">
                <div class="col-12">
                  <div class="chat-box-tray">
                    <i class="material-icons">sentiment_very_satisfied</i>
                    <input type="text" placeholder="Type your message here..." />
                    <i class="material-icons">mic</i>
                    <i class="material-icons">send</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );

  }
}

export default Chat;


function ChatBar(props) {
  return (
    <div class="settings-tray">
      <div class="friend-drawer no-gutters friend-drawer--grey">
        <img class="profile-image" src={p2} alt="" />
        <div class="text">
          <h6>{props.nickname}</h6>
          <p class="text-muted">Layin' down the law since like before Christ...</p>
        </div>
      </div>
    </div>
  );
}

function Message(props) {
  if (props.side == "left") {
    return (
      <div class="row no-gutters">
        <div class="col-md-auto">
          <div class="chat-bubble chat-bubble--left">
            {props.message}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="row no-gutters">
        <div class="col-md-auto offset-md-9">
          <div class="chat-bubble chat-bubble--right">
            {props.message}
          </div>
        </div>
      </div>
    );
  }
}