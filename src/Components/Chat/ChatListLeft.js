import ChatLeftMessageProfile from "./ChatLeftMessageProfile";
import p1 from '../images/profile4.jpg';



export default function ChatListLeft(chats, setFunc) {
    console.log(chats);
    return (
        <div>
            {chats.map((chat) => (<ChatLeftMessageProfile 
            setChat={setFunc} img={chat.img} nickname={chat.nickname} last={chat.last} time={chat.time} hist={chat.messageHistory}/>))}
            {/* <ChatLeftMessageProfile name={"Sagiv"} img={p1} time={"13:53"} last={"hi"}/> */}
        </div>
    );
}