import Message from "./Message";


export default function ChatBox(history) {
    return (
        <div >
            {history.map((message) => (<span><Message side={message.side} text={message.text}/></span>))}
        </div>
    );
}