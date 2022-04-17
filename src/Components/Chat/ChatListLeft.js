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
const sortChat = (chat,setChat) => {
    if (chat.length < 2){
        return chat;
    }
    console.log(chat)
    chat.sort(function compareFn(a, b) {
        let firstConvTime = a.messageHistory.at(a.messageHistory.length - 1).time;
        let firstHour = firstConvTime.slice(0, 2)
        let firstMin = firstConvTime.slice(-2)
        let secondConvTime = b.messageHistory.at(b.messageHistory.length - 1).time;
        let secondHour = secondConvTime.slice(0, 2)
        let secondMin = secondConvTime.slice(-2)
        console.log(firstHour)
        console.log(firstMin)
        console.log(secondHour)
        console.log(secondMin)
        if (firstHour > secondHour){
            console.log("got into it 1")
            return -1;
        }
        if (firstHour === secondHour){
            if (firstMin === secondMin){
                console.log("got into it 2")
                return  1;
            }
             if (firstMin > secondMin)
                return -1;
        }
        console.log("got into it 3")
        let oldBNum = b.num
        let oldAName = a.name
        let copyOfChat = chat;
        copyOfChat.at(b.name).num = a.num
        copyOfChat.at(oldAName).num = oldBNum
        console.log("hrereererer")
        console.log(copyOfChat.at(a.num))
        console.log(copyOfChat.at(b.num))
        console.log("hrereererer")
        // setChat(copyOfChat)
        return 1;
    })
    console.log(chat)
    return chat
}
//IF YOU WANT TI CHANGE IT BACK JUST GET RID OF THE sortChat(chats,setChat) AND POUT chats INSTEAD
export default function ChatListLeft(chats, setChat) {
    return (
        <div>
            <div>
                {sortChat(chats,setChat).map((chat) => (<ChatLeftMessageProfile
                    num={chat.num} setChat={setChat} img={chat.img} nickname={chat.nickname} last={sendLatsMessage(chat)}
                    time={sendLatsMessageTime(chat)} hist={chat.messageHistory} />))}
            </div>
        </div>
    );
}