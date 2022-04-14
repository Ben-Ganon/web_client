import Message from "./Message";


export default function ChatBox(chats, curr) {
    return (
        <div >
            {chats.at(curr).messageHistory.map((message) => (<span><Message side={message.side} text={message.text}/></span>))}
        </div>
    );
}

const findUserIndex = (chats, name, count) => {
    
    return chats.find((el)=> {
      if(el.name === name) {
          return count;
      };
      count++;
    }); 
  }