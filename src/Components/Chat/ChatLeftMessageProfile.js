
import React from "react";
import { Form, Button, Container, Col, Row, Card, Alert } from "react-bootstrap";
import Nick from '../images/nick.png';

import contacts from "./contacts";
import Chat from "./Chat";
import ChatBox from "./ChatBox";

function ChatLeftMessageProfile(chat) {
  if (chat.color == 0) {
    return (
      <Card onClick={() => (chat.setChat(chat.num))} style={{background: "white", height: "20%", borderRadius: '20px solid #b3d9ff', position: "relative" }}>
        <Card>
          <div class="d-flex w-100 justify-content-between" style={{padding:"5px",  background: "black", height: "100%", position: "relative" }}>
            <span><img class="profile-image" src={chat.img} alt="" />
            </span>
            <h5 style={{ color: "white" }}>{chat.nickname}</h5>
            <small style={{ color: "white" }}>{chat.time}</small>
            <div />

          </div>

          <div class="mb-1" style={{ textAlign: "center", background: "black", color: "white" }}>{sendLatsMessage(chat)}</div>
        </Card>
      </Card>
    );
  }
  else {
    return (
      <Card onClick={() => (chat.setChat(chat.num))} style={{ background: "grey", height: "20%", borderRadius: '20px solid #b3d9ff', position: "relative" }}>
        <Card>
          <div class="d-flex w-100 justify-content-between" style={{ background: "grey", height: "100%", position: "relative" }}>
            <span><img class="profile-image" src={chat.img} alt="" />
            </span>
            <h5 style={{ color: "black" }}>{chat.nickname}</h5>
            <small style={{ color: "black" }}>{chat.time}</small>
            <div />

          </div>

          <div class="mb-1" style={{ textAlign: "center", background: "grey", color: "black" }}>{sendLatsMessage(chat)}</div>
        </Card>
      </Card>
    );
  } 

}

const sendLatsMessage = (chat) => {
  if (chat.last === " ")
    return " Start A New Conversation "
  return chat.last
}


const renderChat = (name) => {
  return (
    <div>{ChatBox(contacts.find((element) => {
      return element.name === name;
    }))}</div>
  );
}


export default ChatLeftMessageProfile;



