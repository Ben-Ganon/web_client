import React from "react";
import Message from "./Message";
import Contact from "./Contact";




  let sagivHist = [<Message message={"hello"} side={"left"}/>, <Message message={"Hi"} side={"right"}/>];
  let benHist = [<Message message={"hi"} side={"left"}/>, <Message message={"hhhh"} side={"right"}/>];
  let contacts = [<Contact name={"Sagiv"} mHistory={sagivHist}/>, <Contact name={"Ben"} mHistory={benHist}/>];
  

export default contacts;