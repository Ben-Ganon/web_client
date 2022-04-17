export default function Message(props) {
  if (props.type == "text") {
    if (props.side == "left") {
      return (
        <div class="row no-gutters">
          <div class="col-md-auto">
            <div class="chat-bubble chat-bubble--left">
              <div>{props.content}</div>
              <small>{props.time}</small>
            </div>

          </div>
        </div>
      );
    } else {
      return (
        <div class="row no-gutters">
          <div class="col-md-auto offset-md-9">
            <div class="chat-bubble chat-bubble--right">
              <div>{props.content}</div>
              <small>{props.time}</small>
            </div>
          </div>
        </div>
      );
    }
  } else if(props.type == "image") {
    if (props.side == "left") {
      return (
        <div class="row no-gutters">
          <div class="col-md-auto">
            <div class="chat-bubble chat-bubble--left">
              <img src={props.content}/>
              <small>{props.time}</small>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="row no-gutters">
          <div class="col-md-auto offset-md-6">
            <div class="chat-bubble chat-bubble--right">
            <img src={props.content} alt="preview"/>
            <small>{props.time}</small>
            </div>
            
          </div>
        </div>
      );
    }
  } else if(props.type == "audio") {
    if (props.side == "left") {
      return (
        <div class="row no-gutters">
          <div class="col-md-auto">
            <div class="chat-bubble chat-bubble--left">
              <audio src={props.content}/>
              <small>{props.time}</small>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="row no-gutters">
          <div class="col-md-auto offset-md-6">
            <div class="chat-bubble chat-bubble--right">
            <audio controls >
            <source  src={props.content} type={props.content.type}></source>
            </audio>
            <small>{props.time}</small>
            </div>
            
          </div>
        </div>
      );
    }
  } 
  
  else return null;
}
