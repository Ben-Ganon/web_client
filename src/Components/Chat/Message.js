export default function Message(props) {
    if (props.side == "left") {
      return (
        <div class="row no-gutters">
          <div class="col-md-auto">
            <div class="chat-bubble chat-bubble--left">
              {props.message}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="row no-gutters">
          <div class="col-md-auto offset-md-9">
            <div class="chat-bubble chat-bubble--right">
              {props.message}
            </div>
          </div>
        </div>
      );
    }
  }