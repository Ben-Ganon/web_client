import React, { useState, useRef, useEffect } from "react";
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


  const [currChat, setCurrChat] = useState(0);
  const [chats, setChats] = useState(contacts);
  const [render, setRender] = useState(false);

  const [errorType1, setErrorType1] = useState(false);
  const [errorType2, setErrorType2] = useState(false);
  const [input, setInput] = useState();
  const [userExist, setUserExist] = useState(false);
  const userIsNotExist = () => setUserExist(true);
  const userIsExist = () => setUserExist(false);
  const [show, setShow] = useState(false);
  const [showAttach, setShowAttach] = useState(false);
  const [showFileUp, setShowFileUp] = useState(false);
  const handleShow = () => setShow(true)
  const handleClose = () => { setShow(false); userIsExist() }
  const handleShowAttach = () => setShowAttach(!showAttach)

  const [showAuButt, setShowAudButt] = useState(false);
  const [showRecord, setShowRecord] = useState(false);

  const [fileType, setFileType] = useState();
  const [file, setFile] = useState();

  const handleChange = (e) => {
    console.log(e.target.files[0].type);
    setFileType(e.target.files[0].type);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const handleAudio = () => {
    let chunks = [];
    let constraints = { audio: true, video: false };
    navigator.mediaDevices.getUserMedia(constraints).then(
      (stream) => {
        var mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.onstop = () => {
          let blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
          var today = new Date();
          var audioURL = URL.createObjectURL(blob);
          let newMessage = { type: "audio", side: "right", content: audioURL, time: today.getHours() + ':' + today.getMinutes() };
          sendMessage(newMessage);
        }
        mediaRecorder.ondataavailable = (e) => {
          chunks.push(e.data);
        }
        function recordAudio() {
          console.log("recorder started");
          mediaRecorder.start();
          console.log(mediaRecorder.state);

        }
        function stopAudio() {
          console.log("recorder stopped");
          mediaRecorder.stop();
          console.log(mediaRecorder.state);
        }
        var start = document.getElementById("start-record");
        start.onclick = recordAudio;
        var stop = document.getElementById("stop-record");
        stop.onclick = () => {
          setShowAudButt(false);
          stopAudio()
        }
      }
    );

  }



  const handleFile = () => {
    var today = new Date();
    let newTime = today.getHours() + ':' + today.getMinutes();
    let newMessage = { type: fileType, side: "right", content: file, time: newTime };
    let conts = chats;
    let newContact = chats.at(currChat);
    let history = newContact.messageHistory;
    let newHistory = [...history, newMessage];
    newContact.messageHistory = newHistory;
    conts[currChat] = newContact;
    setRender(renderHelper);
    setShowFileUp(false);
  }

  const sendHeart = () => {
    var today = new Date();
    let newTime = today.getHours() + ':' + today.getMinutes();
    let newMessage = { type: "text", side: "right", content: "♥", time: newTime };
    sendMessage(newMessage);

  }
  const sendMessage = (mess) => {
    let message = mess;
    if (message.content != '') {
      let conts = chats;
      let newContact = chats.at(currChat);
      let history = newContact.messageHistory;
      let newHistory = [...history, message];
      newContact.messageHistory = newHistory;
      conts[currChat] = newContact;
      setRender(renderHelper);
      setChats(conts);
      console.log(conts);
    }
  }
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
      let newChatWithContact = { num: chats.length, name: username.value, img: users.get(username.value).at(2), time: today.getHours() + ':' + today.getMinutes(), messageHistory: hisHistory, nickname: users.get(username.value).at(1) };
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
                <span className="material-icons">NEED TO CHANGE IT TO THE LOGIN</span>
                <Button variant="primary" type="submit" onClick={handleShow}>+++++</Button>
              </span>
            </div>
            <div className="search-box">
              <div className="input-wrapper">

                <input placeholder="Search here" type="text" />
              </div>
            </div>
            <div style={{ overflowY: "scroll", background: "black", color: "white", height: "300px", width: "100%", position: "relative" }}>
              <div>
                {ChatListLeft(chats, setCurrChat)}
              </div>
            </div>
          </div>
          <div class="col-md-8" style={{ marginBottom: "10px" }}>
            <ChatBar nickname={chats.at(currChat).nickname} img={chats.at(currChat).img} />
            <div className="chat-panel" style={{ overflowY: "scroll", overflowX: "hidden", marginBottom: "5px", height: "250px", position: "relative" }}>

              <div>{ChatBox(chats, currChat)}</div>
            </div>
            <div class="row">
              <div class="col-12">
                <Modal style={{ marginLeft: "40%", marginTop: "250px", width: "30%" }} show={showFileUp}>
                  <input id="up-image" type="file" onChange={(e) => handleChange(e)} />
                  <span>
                    <Button type="submit" style={{ alignContent: "left", marginLeft: "32%", width: "30%" }} onClick={() => handleFile()}>send</Button>
                    <Button style={{ marginLeft: "32%", width: "30%" }} onClick={() => setShowFileUp(false)}>cancel</Button>
                  </span>
                </Modal>

                <Modal id="audio-modal" style={{ marginLeft: "40%", marginTop: "250px", width: "30%" }} show={showAuButt}>
                  <span>
                    <Button id="start-record" style={{ marginLeft: "32%", width: "30%" }}>Record</Button>
                    <Button id="stop-record" style={{ marginLeft: "32%", width: "40%" }} >stop Recording</Button>
                    <Button style={{ marginLeft: "32%", width: "30%" }} onClick={() => setShowAudButt(false)}>cancel</Button>
                  </span>
                </Modal>

                <div><span className="App">
                  {
                    showAttach ? <button onClick={() => (setShowAudButt(true), handleAudio())}><img src={record} alt='record' width="16" height="16" fill="currentColor" /></button> : null
                  }
                </span>
                  <span className="App">
                    {
                      showAttach ? <button onClick={() => setShowFileUp(true)}><img src={video} alt='video' width="16" height="16" fill="currentColor" /></button> : null
                    }
                  </span>
                  <span className="App">
                    {
                      showAttach ? <button onClick={() => sendHeart()}><img src={heart} alt='heart' width="16" height="16" fill="currentColor" /></button> : null
                    }
                  </span></div>
                <div class="chat-box-tray">

                  <div>
                  </div>
                  <button onClick={handleShowAttach}><img src={attach} alt='attachment' width="16" height="16" fill="currentColor" /></button>
                  <form>
                    <input id="chatIn" defaultValue="" type="text" width="70" placeholder="Type your message here..." />
                    <Button type="button" onClick={() => { sendMessage(getMessage()) }}>send</Button>
                  </form>
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




const getMessage = () => {
  var today = new Date();
  let message = document.getElementById("chatIn").value;
  document.getElementById("chatIn").value = '';
  let newMessage = { type: "text", side: "right", content: message, time: today.getHours() + ':' + today.getMinutes() };
  return newMessage;
}

const renderHelper = (prev) => {
  return !prev;
}

function ChatBar(props) {
  return (
    <div className="settings-tray">
      <div className="friend-drawer no-gutters friend-drawer--grey">
        <img className="profile-image" src={props.img} alt="" />
        <div className="text">
          <h6>{props.nickname}</h6>
          <p className="text-muted">Online</p>
        </div>
      </div>
    </div>
  );
}


