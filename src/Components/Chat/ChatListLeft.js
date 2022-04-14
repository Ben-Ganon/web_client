import ChatLeftMessageProfile from "./ChatLeftMessageProfile";
import p1 from '../images/profile4.jpg';



export default function ChatListLeft(chats, setChat) {
    return (
        <div>
            {chats.map((chat) => (<ChatLeftMessageProfile 
            num={chat.num} setChat={setChat} img={chat.img} name={chat.name} last={chat.last} 
            time={chat.time} hist={chat.messageHistory}/>))}
        </div>
    );
}