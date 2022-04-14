import React, { useState, useEffect, useReducer } from "react";
import Nick from '../images/nick.png';
import p1 from '../images/profile.jpg';
import p2 from '../images/profile5.png';
import p3 from '../images/profile2.png';
import p4 from '../images/profile3.png';
import ChatLeftMessageProfile from './ChatLeftMessageProfile'
import { Link } from "react-router-dom";
import { Form, Button, Modal, Container, Col, Row, Card, Alert } from "react-bootstrap";
import Message from "./Message";
import ChatBox from "./ChatBox";
import contacts from "./contacts";
import "./Chat.css";
import ChatListLeft from "./ChatListLeft";
import users from "../Users";



export default function Chat() {
  let defaultBox = [{ side: "right", text: "" }];
  const [currChat, setCurrChat] = useState(0);
  const [chats, setChats] = useState(contacts);
  const [render, setRender] = useState(false);
  const [errorType1, setErrorType1] = useState(false);
  const [errorType2, setErrorType2] = useState(false);
  const [input, setInput] = useState();
  const [userExist, setUserExist] = useState(false)
  const userIsNotExist = () => setUserExist(true)
  const userIsExist = () => setUserExist(false)
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => { setShow(false); userIsExist() }

  const checkUserExists = (name) => {
    return chats.find((el) => {
      return el.name === name;
    });
  }
  const addContactChat = () => {
    let username = (document.getElementById("usernameAdd"));
    //cheks if we already have a chat with this contact
    console.log(username.value);

    if (checkUserExists(username.value)) {
      console.log("hot here\n");
      setErrorType2(false)
      setErrorType1(true)
      userIsNotExist()
      return null;
    }

    if (users.has(username.value)) {
      console.log(" offfffffffffff\n");
      setShow(false)
      let hisHistory = []
      var today = new Date();
      let newChatWithContact = { name: username.value, img: users.get(username.value).at(2), time: today.getHours() + ':' + today.getMinutes(), last: " ", messageHistory: hisHistory, nickname: users.get(username.value).at(1) };
      let newContact = [...chats, newChatWithContact];
      userIsExist()
      setErrorType1(false)
      setErrorType2(false)
      return newContact

    }
    else {
      setErrorType1(false)
      setErrorType2(true)
      userIsNotExist()
      return null;
    }

    //need to enter the function to add the person 
  }

  return (
    <body>
      <div className="container" style={{ background: "pink", height: "100%", width: "100%" }}>
        <div className="row no-gutters" style={{ background: "#66b3ff", height: "70%" }}>
          <div className="col-md-4 border-right" style={{ background: "blue", height: "80%" }}>
            <div className="settings-tray">
              <img className="profile-image" src={p1} alt="Profile img" />
              <span className="settings-tray--right">
                <span className="material-icons">Sagiv</span>
                <Button variant="primary" type="submit" onClick={handleShow}>+++++</Button>
              </span>
            </div>
            <div className="search-box">
              <div className="input-wrapper">

                <input placeholder="Search here" type="text" />
              </div>
            </div>
            <div style={{ overflowY: "scroll", background: "black", color: "white", height: "55%", width: "100%", position: "relative" }}>
              <div>
                {ChatListLeft(chats, setCurrChat)}
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <ChatBar nickname={"yyy"} />
            <div className="chat-panel">

              <div>{ChatBox(chats, currChat)}</div>

              <div class="row">
                <div class="col-12">
                  <div class="chat-box-tray">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                      <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                    </svg>
                    <form>
                      <input id="chatIn" defaultValue="" type="text" placeholder="Type your message here..." />
                      <i class="material-icons">mic</i>
                      <Button type="button" onClick={() => {
                        let message = sendMessage();
                        let conts = chats;
                        let newContact = chats.at(currChat);
                        let history = newContact.messageHistory;
                        let newHistory = [...history, message];
                        newContact.messageHistory = newHistory;
                        conts[currChat] = newContact;
                        setRender(renderHelper);
                        setChats(conts);
                        console.log(conts)
                      }
                      }>send</Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show}>
        <div className="container">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add New Contact</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <Form.Control id="usernameAdd" type="usernameAdd" placeholder="Enter Username"></Form.Control>
              <div id="emailHelp" className="form-text">Make sure you entered his Username and not his freaky-name</div>
            </div>
            <Alert variant="danger" show={userExist && errorType1}  >
              <Alert.Heading>You already have chat with this user</Alert.Heading>
            </Alert>
            <Alert variant="danger" show={userExist && errorType2}  >
              <Alert.Heading>There is no user with that name</Alert.Heading>
            </Alert>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={() => {
              let newContact = addContactChat();
              if (newContact != null) {
                setChats(newContact)
              }
            }}>Start Chat</button>
          </div>
        </div>
      </Modal>
    </body>
  );
}




const sendMessage = () => {
  let message = document.getElementById("chatIn").value;
  document.getElementById("chatIn").value = '';
  let newMessage = { side: "right", text: message };
  return newMessage;
}

const renderHelper = (prev)=> {
  return !prev;
}

function ChatBar(props) {
  return (
    <div className="settings-tray">
      <div className="friend-drawer no-gutters friend-drawer--grey">
        <img className="profile-image" src={p2} alt="" />
        <div className="text">
          <h6>{props.nickname}</h6>
          <p className="text-muted">text</p>
        </div>
      </div>
    </div>
  );
}









