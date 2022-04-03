import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import Registration from './Registration';
import Landing from './Landing';
import React, { useState } from 'react';


class App extends React.Component {
  constructor() {
      super();
      this.state = {loginActive: true};
      const userPass = new Map();
      userPass.set("Ben", "1234");
      userPass.set("Sagiv", "1111");
      this.state = {users : userPass};
      this.togglePage = this.togglePage.bind(this);
  }

  togglePage() {
    this.setState(prevState => ({loginActive: !prevState.loginActive}));
    console.log("switched!");
  }

  render() {
    const isLogin = this.state.loginActive;
    let current;
    let button;
    if (isLogin) {
      current = <Login userPass = {this.state.users}/>;
      button = <button onClick={this.togglePage}> Not Registered? </button>;
    } else {
      current = <Registration/>;
      button = <button onClick={this.togglePage}> Back To Login </button>;
    }
    return (
      <div>
        {current} 
        <br/>
        {button}
      </div>
      
    );
    }

  }

export default App;
