import React from "react";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: props.name, mHistory:props.hist};
    }

    render() {
        return(
            <div>
                {this.state.mHistory}
            </div>
        );
    }
    addMessage(props){
        this.state.mHistory.push(props);
    }
}

export default Contact;