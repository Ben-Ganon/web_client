import React from "react";
import Login from "./Login";
import Registration from "./Registration";


class Landing extends React.Component {
    constructor() {
        super();
        this.state ={pageLogin : true};
    }
    togglePage() {
        this.setState({ pageLogin: !this.pageLogin });
    }
    render() {
        if (this.pageLogin) { 
            return <Login />; } 
        else {
            return <Registration />;}
    }
}

export default Landing;
