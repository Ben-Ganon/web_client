import ChatLeftMessageProfile from "./ChatLeftMessageProfile";
import p1 from '../images/profile4.jpg';



export default function ChatListLeft(chats) {
    console.log(chats);
    return (
        <div>
            {chats.map((chat) => (<ChatLeftMessageProfile img={chat.img} name={chat.name} last={chat.last} time={chat.time} />))}
            {/* <ChatLeftMessageProfile name={"Sagiv"} img={p1} time={"13:53"} last={"hi"}/> */}
        </div>
    );
}