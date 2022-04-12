import React, { useState } from "react";    
import p1 from '../images/profile4.jpg';
let SagivMessages = [{side: "left", text:"Hello"},{side: "left", text: "I am Sagiv"}, {side: "right", text: "ok"}]

let contacts = [{name: "Sagiv", img: p1, time: "13:53",last: "hi", messageHistory: SagivMessages}, {name: "Ben", img: p1, time: "12:13",last: "itsa me, mario", messageHistory: SagivMessages}];


export default contacts;