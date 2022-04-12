import Message from "./Message";


export default function ChatBox(chats, curr) {
    let count = 0;
    let userIndex = findUserIndex(chats, curr, count);
    console.log(userIndex);
    return (
        <div >
            {chats.at(userIndex).messageHistory.map((message) => (<span><Message side={message.side} text={message.text}/></span>))}
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