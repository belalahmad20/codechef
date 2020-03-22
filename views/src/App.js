import React , {PureComponent} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login"
import ContedtName from "./components/ContedtName"


export default class App extends PureComponent {
  render() {
    return (
      <React.Fragment>
        {/* <Login /> */}
        <ContedtName />
      </React.Fragment>
    )
  }
}
