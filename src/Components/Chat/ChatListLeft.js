import ChatLeftMessageProfile from "./ChatLeftMessageProfile";
import p1 from '../images/p1.jpg';

const sendLatsMessage = (chat) => {
    if (chat.messageHistory.length === 0)
        return " "
    return chat.messageHistory.at(chat.messageHistory.length - 1).text;
}
const sendLatsMessageTime = (chat) => {
    if (chat.messageHistory.length === 0)
        return chat.time;
    return chat.messageHistory.at(chat.messageHistory.length - 1).time;
}

//IF YOU WANT TI CHANGE IT BACK JUST GET RID OF THE sortChat(chats,setChat) AND POUT chats INSTEAD
export default function ChatListLeft(chats, setChat) {
    return (
        <div>
            <div>
                {chats.map((chat) => (<ChatLeftMessageProfile
                    num={chat.num} setChat={setChat} img={chat.img} nickname={chat.nickname} last={sendLatsMessage(chat)}
                    time={sendLatsMessageTime(chat)} hist={chat.messageHistory} />))}
            </div>
        </div>
    );
}