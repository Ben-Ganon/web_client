import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import Registration from './Registration';
import Landing from './Landing';
import React, { useState } from 'react';


// function App {
//   const pageLog = useState(loginActive)
//     return (
//       <div>
//         <this.getPage pageLogin = {this.loginActive}/> <br/>
//         <button onClick={this.togglePage}> switch </button>
//       </div>
      
//     );
// }

class App extends React.Component {
  constructor() {
      super();
      this.state = {loginActive: true};
      this.togglePage = this.togglePage.bind(this);
      this.getPage = this.getPage.bind(this);
  }

  togglePage() {
    this.setState(prevState => ({loginActive: !prevState.loginActive}));
    console.log("switched!");
  }
  getPage(props) {
    if (props.pageLogin) {
      return <Login/>;
    } else {
      return <Registration/>
    }
  }
  render() {
    const isLogin = this.state.loginActive;
    let current;
    if (isLogin) {
      current = <Login/>;
    } else {
      current = <Registration/>;
    }
    return (
      <div>
        {current} 
        <br/>
        <button onClick={this.togglePage}> Not Registered? </button>
      </div>
      
    );
    }

  }

export default App;
