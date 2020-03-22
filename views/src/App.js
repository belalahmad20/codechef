import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login"
import ContedtName from "./components/ContedtName"
import ContestScreen from "./components/contestScreen"


export default class App extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Login />
        {/* <ContedtName />
        <ContestScreen /> */}
      </React.Fragment>
    )
  }
}
