import React, { useState } from "react";
import Nick from '../images/nick.png';
import p1 from '../images/profile.jpg';
import p2 from '../images/profile5.png';
import p3 from '../images/profile2.png';
import p4 from '../images/profile3.png';
import ChatLeftMessageProfile from './ChatLeftMessageProfile'
import { Link } from "react-router-dom";
import { Form, Button, Container, Col, Row, Card, Alert } from "react-bootstrap";
import Message from "./Message";
import ChatBox from "./ChatBox";
import contacts from "./contacts";
import "./Chat.css";
import ChatListLeft from "./ChatListLeft";



export default function Chat() {
  const [currChat, setCurrChat] = useState(0);
  const [chatList, setChatList] = useState(contacts);
  const [chat, setChat] = useState(contacts.at(currChat));
  const [val, setVal] = useState();
  return (
    <div className="container" style={{ background: "pink", height: "100%", width: "100%" }}>
      <div class="row no-gutters" style={{ background: "#66b3ff", height: "70%" }}>
        <div class="col-md-4 border-right" style={{ background: "blue", height: "80%" }}>
          <div class="settings-tray">
            <img class="profile-image" src={p1} alt="Profile img" />
            <span class="settings-tray--right">
              <span class="material-icons">Sagiv</span>
              <Button variant="primary" type="submit">+++++</Button>
            </span>
          </div>
          <div class="search-box">
            <div class="input-wrapper">

              <input placeholder="Search here" type="text" />
            </div>
          </div>
          <div style={{ background: "black", color: "white", height: "55%", width: "100%", position: "relative" }}>

            <div>{ChatListLeft(chatList)}</div>
            {/* <ChatLeftMessageProfile img={Nick} username={"Ben Ganon"} lastMassage={"sup?"} time={"13:45"} />
            <ChatLeftMessageProfile img={p1} username={"Sagiv Antebi"} lastMassage={"yo?"} time={"12:10"} />
            <ChatLeftMessageProfile img={p2} username={"Sahar Rofe"} lastMassage={"how are you dion?"} time={"11:45"} />
            <ChatLeftMessageProfile img={p3} username={"Omri Ben Hemo"} lastMassage={"fu!"} time={"10:55"} />
            <ChatLeftMessageProfile img={p4} username={"Uri Greitzer "} lastMassage={"sup?"} time={"10:45"} />
            <ChatLeftMessageProfile img={Nick} username={"Sagiv Ante"} lastMassage={"sup?"} time={"9:45"} /> */}
          </div>
        </div>
        <div class="col-md-8">
          <ChatBar nickname={"yyy"} />
          <div className="chat-panel">

            <div>{ChatBox(chat.messageHistory)}</div>

            <div class="row">
              <div class="col-12">
                <div class="chat-box-tray">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                    <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                  </svg>
                  <input id="chatIn" value={val} type="text" placeholder="Type your message here..." />
                  <i class="material-icons">mic</i>
                  <Button onClick={() => {
                    let newChat = sendMessage(chat);
                    setVal(' ');
                    setChat(newChat);
                  }}>send</Button>
                </div>
              </div>
            </div>
          </div>2
        </div>
      </div>
    </div>

  );
}


const sendMessage = (chat) => {
  let message = document.getElementById("chatIn").value;
  let newMessage = { side: "right", text: message };
  let newChat = { name: chat.name, messageHistory: [...chat.messageHistory, newMessage] };
  return newChat;
}


function ChatBar(props) {
  return (
    <div class="settings-tray">
      <div class="friend-drawer no-gutters friend-drawer--grey">
        <img class="profile-image" src={p2} alt="" />
        <div class="text">
          <h6>{props.nickname}</h6>
          <p class="text-muted">text</p>
        </div>
      </div>
    </div>
  );
}








