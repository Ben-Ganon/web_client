
import React from "react";
import { Form, Button, Container, Col, Row, Card, Alert } from "react-bootstrap";
import Nick from '../images/nick.png';
import contacts from "./contacts";
import Chat from "./Chat";
import ChatBox from "./ChatBox";

 function ChatLeftMessageProfile(chat) {
  return (
    <Card onClick={()=>(chat.setChat(chat.num))} style={{ background: "#99e6ff", height: "20%", border: '2px solid #b3d9ff', position: "relative" }}>
      <div class="d-flex w-100 justify-content-between" style={{ background: "#99ccff", height: "100%", position: "relative" }}>
        <span><img class="profile-image" src={chat.img} alt="" />
        </span>
        <h5>{chat.nickname}</h5>
        <small>{chat.time}</small>
      </div>
      <div class="mb-1" style={{ textAlign: "center", background: "#99ccff" }}>{chat.last}</div>
    </Card>
  );

}

const renderChat = (name) => {
  return (
    <div>{ChatBox(contacts.find((element)=>{
      return element.name === name;
    }))}</div>
  );
}


// class ChatLeftMessageProfile extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { username: props.username};
//         this.username = props.username;
//         this.img = props.img;
//         this.lastMassage = props.lastMassage;
//         this.time = props.time;

//     }

//     render() {
//         return (
//             <Card style={{background:"#99e6ff", height: "20%", border: '2px solid #b3d9ff', position: "relative"}} onClick={()=>{return(alert("hello"));}}>
//               <div class="d-flex w-100 justify-content-between" style={{background: "#99ccff", height: "100%",position: "relative"}}>
//               <span><img class="profile-image" src={this.img} alt=""/>
//                 </span>
//                 <h5>{this.username}</h5>
//                 <small>{this.time}</small>
//               </div>
//               <div class="mb-1" style={{textAlign: "center" ,background: "#99ccff"}}>{this.lastMassage}</div>
//           </Card> 

//         );


//     }



export default ChatLeftMessageProfile;



