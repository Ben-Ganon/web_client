
import React from "react";
import { Form, Button, Container, Col, Row, Card, Alert } from "react-bootstrap";
import Nick from '../images/nick.png';

import contacts from "./contacts";
import Chat from "./Chat";
import ChatBox from "./ChatBox";

function ChatLeftMessageProfile(chat) {
    return (
      <Card onClick={() => (chat.setChat(chat.num))} style={{background: "white", height: "20%", borderRadius: '20px solid #b3d9ff', position: "relative" }}>
        <Card>
          <div class="d-flex w-100 justify-content-between" style={{padding:"5px",  background: "black", height: "100%", position: "relative" }}>
            <span><img class="profile-image" src={chat.img} alt="" />
            </span>
            <h5 style={{ color: "white" }}>{chat.nickname}</h5>
            <small style={{ color: "white" }}>{chat.time.substr(0, 5)}</small>
            <div />
          </div>
          <div class="mb-1" style={{ textAlign: "center", background: "black", color: "white" }}>{sendLatsMessage(chat)}</div>
        </Card>
      </Card>
    );
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



