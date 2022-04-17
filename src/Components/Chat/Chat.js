import React, { useState, useRef, useEffect } from "react";
import Nick from '../images/nick.png';
import p1 from '../images/p1.jpg';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.jpg';
import defaultContact from '../images/defaultContact.jpg';
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
import onlineArray from "./onlineArray";


export default function Chat() {
  const [online1, setOnline] = useState(onlineArray);
  let usernameLogin;
  try {
    usernameLogin = (document.getElementById("formUsername")).value;
    if (usernameLogin !== "" && online1.length < 2) {
      setOnline([...online1, usernameLogin])
    }
  } catch (error) { }
  let usernameToUse;
  if (online1.length == 2) {
    usernameToUse = online1.at(1);
  }
  else {
    usernameToUse = online1.at(0);
  }
  
  const [boolChangeOnce, setBoolChangeOnce] = useState(false)
  const [currChat, setCurrChat] = useState(0);
  const [chats, setChats] = useState(users.get(usernameToUse).at(3));

  //checks if the correct chat is insert into the chatbox to show
  if (usernameToUse == online1.at(1) && users.get(usernameToUse).at(3) != chats) {
    if (boolChangeOnce == false) {
      setBoolChangeOnce(true)
      setChats(users.get(usernameToUse).at(3))
    }
  }


  const [render, setRender] = useState(false);

  const [errorType1, setErrorType1] = useState(false);
  const [errorType2, setErrorType2] = useState(false);
  const [errorType3, setErrorType3] = useState(false);
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
    if (username.value == usernameToUse) {
      setErrorType3(true)
      setErrorType2(false)
      setErrorType1(false)
      userIsNotExist()
      return null;

    }

    if (checkUserExists(username.value)) {
      setErrorType2(false)
      setErrorType1(true)
      userIsNotExist()
      return null;
    }

    if (users.has(username.value)) {
      setShow(false)
      let hisHistory = []
      var today = new Date();
      let hour = today.getHours();
      let min = today.getMinutes();
      if (hour < 10)
        hour = "0" + today.getHours();
      if (min < 10)
        min = "0" + today.getMinutes();
      let newChatWithContact = { num: chats.length, name: username.value, img: users.get(username.value).at(2), time: hour + ':' + min, messageHistory: hisHistory, nickname: users.get(username.value).at(1) };
      let newContact = [...chats, newChatWithContact];
      userIsExist()
      setErrorType1(false)
      setErrorType2(false)
      setErrorType3(false)
      return newContact

    }
    else {
      setErrorType1(false)
      setErrorType2(true)
      setErrorType3(false)
      userIsNotExist()
      return null;
    }

  }
  
  const returnStatus = () => {
    if (chats.length != 0) {
      return "Offline";
    }
    return "";
  }

  const returnNickname = () => {
    if (chats.length != 0) {
      return chats.at(currChat).nickname;
    }
    return "";
  }

  const returnImg = () => {
    if (chats.length != 0) {
      return chats.at(currChat).img;
    }
    return defaultContact;
  }

  const returnMsg = () => {
    if (chats.length != 0) {
      return ChatBox(chats, currChat);
    }
    return "";
  }



  return (
    <body>
      <div className="container" style={{ background: "pink", height: "100%", width: "100%" }}>
        <div className="row no-gutters" style={{ background: "#66b3ff", height: "70%" }}>
          <div className="col-md-4 border-right" style={{ background: "blue", height: "80%" }}>
            <div className="settings-tray">
              <img className="profile-image" src={users.get(usernameToUse).at(2)} alt="Profile img" />
              <span className="settings-tray--right">
                <span className="material-icons">{users.get(usernameToUse).at(1)}</span>
                <Button variant="primary" type="submit" onClick={handleShow}>+</Button>
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
            <ChatBar status={returnStatus()} nickname={returnNickname()} img={returnImg()} />
            <div className="chat-panel" style={{ overflowY: "scroll", overflowX: "hidden", marginBottom: "5px", height: "250px", position: "relative" }}>

              <div>{returnMsg()}</div>
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
            <Alert variant="danger" show={userExist && errorType3}  >
              <Alert.Heading>You can't add yourself LOL</Alert.Heading>
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
  let hour = today.getHours();
  let min = today.getMinutes();
  if (hour < 10)
    hour = "0" + today.getHours();
  if (min < 10)
    min = "0" + today.getMinutes();
  let newMessage = { type:"text", side: "right", content: message, time: hour + ':' + min };
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
          <p className="text-muted">{props.status}</p>
        </div>
      </div>
    </div>
  );
}


