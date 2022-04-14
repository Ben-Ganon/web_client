import React, { useState } from "react";
import p1 from '../images/profile4.jpg';
import users from "../Users";

let contacts = [{num: 0, name:"Sagiv", img: users.get("Sagiv").at(2), time: "13:53", messageHistory: [{side: "left", text:"Hello",time:"13:53"},{side: "left", text: "I am Sagiv",time:"15:53"}, {side: "right", text: "ok",time:"16:00"}],nickname: users.get("Sagiv").at(1)},
                {num: 1, name:"Ben", img: users.get("Ben").at(2), time: "12:13", messageHistory: [{side: "left", text:"Hello",time:"13:53"},{side: "left", text: "I am Sagiv",time:"13:53"}, {side: "right", text: "BEENNNN",time:"14:53"}],nickname: users.get("Ben").at(1)}];


export default contacts;