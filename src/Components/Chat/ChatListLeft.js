import ChatLeftMessageProfile from "./ChatLeftMessageProfile";
import p1 from '../images/p1.jpg';

const sendLatsMessage = (chat) => {
    if (chat.messageHistory.length === 0)
        return " "
    return chat.messageHistory.at(chat.messageHistory.length - 1).content;
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
                {chats.sort(timeComp).map((chat) => (<ChatLeftMessageProfile
                    num={chat.num} setChat={setChat} img={chat.img} nickname={chat.nickname} last={sendLatsMessage(chat)}
                    time={sendLatsMessageTime(chat)} hist={chat.messageHistory} />))}
            </div>
        </div>
    );
}


const timeComp = (a, b) => {
    let timeA = a.messageHistory.at(a.messageHistory.length - 1).time;
    let timeB = b.messageHistory.at(b.messageHistory.length - 1).time;
    let hoursA = parseInt( timeA.substr(0,2));
    let hoursB = parseInt(timeB.substr(0,2));
    let minA = parseInt(timeA.substr(3,5));
    let minB = parseInt(timeB.substr(3,5));
    if(hoursA > hoursB)
        return -1;
    else if(hoursB > hoursA)
        return 1;
    else if(minA > minB)
        return -1;
    return 1;
}