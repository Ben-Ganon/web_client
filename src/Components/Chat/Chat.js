import React, { useState, useEffect } from "react";
import Nick from '../images/nick.png';
import p1 from '../images/profile.jpg';
import p2 from '../images/profile5.png';
import p3 from '../images/profile2.png';
import p4 from '../images/profile3.png';
import attach from '../images/attachment-icon-png-8.jpg';
import record from '../images/record.png';
import video from '../images/video.png';
import heart from '../images/heart.png';

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
  let defaultBox = [{side:"right", text:""}];
  const [currChat, setCurrChat] = useState(defaultBox);
  const [chatListLeft, setChatListLeft] = useState(contacts);
  const [chat, setChat] = useState(contacts.at(currChat));
  const [errorType1, setErrorType1] = useState(false);
  const [errorType2, setErrorType2] = useState(false);
  const [input, setInput] = useState();
  const [userExist, setUserExist] = useState(false)
  const userIsNotExist = () => setUserExist(true)
  const userIsExist = () => setUserExist(false)
  const [show, setShow] = useState(false)
  const [showAttach, setShowAttach] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => { setShow(false); userIsExist() }
  const handleShowAttach = () => setShowAttach(!showAttach)


  const checkUserExists = (name) => {
    return chatListLeft.find((el)=> {
      return el.name === name;
    }); 
  }
  const addContactChat = () => {
    let username = (document.getElementById("usernameAdd"));
    //cheks if we already have a chat with this contact
    console.log(username.value);

    if(checkUserExists(username.value))
    { 
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
      console.log(users.get(username.value).at(1));
      let newChatWithContact = { name:  username.value, img: users.get(username.value).at(2), time: today.getHours() + ':' + today.getMinutes(), last: " ", messageHistory: hisHistory, nickname: users.get(username.value).at(1)};
      let newContact = [...chatListLeft, newChatWithContact];
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
              {ChatListLeft(chatListLeft, setCurrChat)}
              </div>
            </div>
          </div>
          <div class="col-md-8">
              <ChatBar nickname={"yyy"} />
              <div className="chat-panel">

                <div>{ChatBox(currChat)}</div>

                <div class="row">
                  <div class="col-12">
                  <div><span className="App">
                  { 
                    showAttach?<button onClick={handleShowAttach}><img src={record} alt='record'  width="16" height="16" fill="currentColor" /></button>:null
                  }
                  </span>
                  <span className="App">
                  { 
                    showAttach?<button onClick={handleShowAttach}><img src={video} alt='video'  width="16" height="16" fill="currentColor" /></button>:null
                  }
                  </span>
                  <span className="App">
                  { 
                    showAttach?<button onClick={handleShowAttach}><img src={heart} alt='heart'  width="16" height="16" fill="currentColor" /></button>:null

                  }
                  </span></div>
                    <div class="chat-box-tray">
                    
                    <div>
                    </div>
                      <button onClick={handleShowAttach}><img src={attach} alt='attachment'  width="16" height="16" fill="currentColor" /></button>
                      <form>
                      <input id="chatIn" defaultValue=""  type="text" width="70" placeholder="Type your message here..."/>
                      <Button type="button" onClick={() => {
                        let newChat = sendMessage(chat);
                        setChat(newChat);
                        document.getElementById("chatIn").value = '';
                      }}>send</Button>
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
            <button type="button" className="btn btn-primary" onClick={()=>{
              let newContact = addContactChat();
              if (newContact!=null){
                setChatListLeft(newContact)
              }
            }}>Start Chat</button>
          </div>
        </div>
      </Modal>
    </body>
  );
}




const sendMessage = (chat, input) => {
  let message = document.getElementById("chatIn").value;
  let newMessage = { side: "right", text: message };
  let newChat = { name: chat.name, messageHistory: [...chat.messageHistory, newMessage] };
  return newChat;
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










