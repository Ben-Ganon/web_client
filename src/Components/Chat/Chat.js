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
import onlineArray from "./onlineArray";


export default function Chat() {
  const [online1, setOnline] = useState(onlineArray);
  let usernameLogin;
  try {
    usernameLogin = (document.getElementById("formUsername")).value;
    if (usernameLogin !== "" && online1.length < 2) {
      console.log("got into it")
      setOnline([...online1,usernameLogin])
    }
  } catch (error) {}
  console.log(online1)
  let usernameToUse;
  if(online1.length == 2){
    usernameToUse = online1.at(1);
  }
  else{
    usernameToUse = online1.at(0);
  }
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const stripRef = useRef(null);
  useEffect(() => {
    handleVideo();
  }, [videoRef]);

  const [currChat, setCurrChat] = useState(0);
  const [chats, setChats] = useState(contacts);
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
  const [showVideo, setShowVideo] = useState(false);

  const handleShow = () => setShow(true)
  const handleClose = () => { setShow(false); userIsExist() }
  const handleShowAttach = () => setShowAttach(!showAttach)
  const handleVideo = () => {

    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();

      })
      .catch(err => {
        console.error("error:", err);
      });

  };


  const sendImage = (photo) => {
    let message = { side: "right", text: photo };
    let conts = chats;
    let newContact = chats.at(currChat);
    let history = newContact.messageHistory;
    let newHistory = [...history, message];
    newContact.messageHistory = newHistory;
    conts[currChat] = newContact;
    setRender(renderHelper);
    setChats(conts);
  }

  const paintToCanvas = () => {
    let video = videoRef.current;
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");

    const width = 320;
    const height = 240;
    photo.width = width;
    photo.height = height;

    return setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height);
    }, 200);
  };

  const stop = (e) => {
    const stream = video.srcObject;
    const tracks = stream.getTracks();

    for (let i = 0; i < tracks.length; i++) {
      let track = tracks[i];
      track.stop();
    }

    video.srcObject = null;
  }

  const takePhoto = () => {
    let photo = photoRef.current;
    let strip = stripRef.current;

    console.warn(strip);
    sendImage(photo);
    const data = photo.toDataURL("image/jpeg");

    const link = document.createElement("a");
    // link.href = data;
    // link.setAttribute("download", "myWebcam");
    // link.innerHTML = `<img src='${data}' alt='thumbnail'/>`;
    // strip.insertBefore(link, strip.firstChild);
  };

  const sendMessage = () => {
    let message = getMessage();
    if (message.text != '') {
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
    console.log(usernameToUse);
    if (username.value == usernameToUse) {
      setErrorType3(true)
      setErrorType2(false)
      setErrorType1(false)
      userIsNotExist()
      return null;

    }

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
      let hour = today.getHours();
      let min = today.getMinutes();
      if (hour < 10)
        hour = "0" + today.getHours();
      if(min <10)
      min = "0" + today.getMinutes();
      let newChatWithContact = { num: chats.length, name: username.value, img: users.get(username.value).at(2), time:hour + ':' + min, messageHistory: hisHistory, nickname: users.get(username.value).at(1) };
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
    //need to enter the function to add the person 
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
            <ChatBar nickname={chats.at(currChat).nickname} img={chats.at(currChat).img} />
            <div className="chat-panel" style={{ overflowY: "scroll", overflowX: "hidden", marginBottom: "5px", height: "250px", position: "relative" }}>

              <div>{ChatBox(chats, currChat)}</div>
            </div>
            <div class="row">
              <div class="col-12">
                <Modal show={showVideo}>
                  {/* <canvas ref={photoRef} /> */}
                  <div>
                    <div ref={stripRef} />
                  </div>
                  <Button onClick={() => (takePhoto())}>take photo</Button>
                  <video onCanPlay={() => paintToCanvas()} ref={videoRef} />
                  <Button onClick={() => { setShowVideo(false) }}>close</Button>
                </Modal>

                <div><span className="App">
                  {
                    showAttach ? <button onClick={() => (handleShowAttach)}><img src={record} alt='record' width="16" height="16" fill="currentColor" /></button> : null
                  }
                </span>
                  <span className="App">
                    {
                      showAttach ? <button onClick={() => { handleVideo(); setShowVideo(true) }}><img src={video} alt='video' width="16" height="16" fill="currentColor" /></button> : null
                    }
                  </span>
                  <span className="App">
                    {
                      showAttach ? <button onClick={handleShowAttach}><img src={heart} alt='heart' width="16" height="16" fill="currentColor" /></button> : null
                    }
                  </span></div>
                <div class="chat-box-tray">

                  <div>
                  </div>
                  <button onClick={handleShowAttach}><img src={attach} alt='attachment' width="16" height="16" fill="currentColor" /></button>
                  <form>
                    <input id="chatIn" defaultValue="" type="text" width="70" placeholder="Type your message here..." />
                    <Button type="button" onClick={() => { sendMessage() }
                    }>send</Button>
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
  if(min <10)
  min = "0" + today.getMinutes();
  let newMessage = { side: "right", text: message, time: hour + ':' + min };
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

