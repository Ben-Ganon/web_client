import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import Home from './Home';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Registration from './Registration';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {
  <script
    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
    crossorigin>

  </script>
  const userPass = new Map();
  userPass.set("Ben", "1234");
  userPass.set("Sagiv", "1111");
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Register' element={<Registration />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
































// class App extends React.Component {
//   constructor() {
//       super();
//       this.state = {loginActive: true};
//       const userPass = new Map();
//       userPass.set("Ben", "1234");
//       userPass.set("Sagiv", "1111");
//       this.state = {users : userPass};
//       this.togglePage = this.togglePage.bind(this);
//   }

//   togglePage() {
//     this.setState(prevState => ({loginActive: !prevState.loginActive}));
//     console.log("switched!");
//   }

//   render() {
//     const isLogin = this.state.loginActive;
//     let current;
//     let button;
//     if (isLogin) {
//       current = <Login userPass = {this.state.users}/>;
//       button = <button onClick={this.togglePage}> Not Registered? </button>;
//     } else {
//       current = <Registration/>;
//       button = <button onClick={this.togglePage}> Back To Login </button>;
//     }
//     return (
//       <div>
//         {current} 
//         <br/>
//         {button}
//       </div>
//     );
//     }

//   }

