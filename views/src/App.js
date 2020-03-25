import React, { PureComponent } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import ContedtName from "./components/ContedtName";
import ContestScreen from "./components/contestScreen";
import Problem from "./components/Problem";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      status: "false",
      step: 0,
      selectConstest: {},
      selectProgram: {}
    };
  }
  componentWillMount() {
    if (localStorage.getItem("token") && localStorage.getItem("userD")) {
      this.setState({
        status: "true",
        step: parseInt(localStorage.getItem("current"))
      });
    }
  }
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        {this.state.status === "false" ? (
          <React.Fragment>
            <Login
              onLogin={e => {
                this.setState({ status: "true", step: 1 });
                localStorage.setItem("current", JSON.stringify(1));
              }}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            {this.state.step === 1 ? (
              <ContedtName
                onIncrease={e => {
                  this.setState({ step: 2, selectConstest: e });
                  localStorage.setItem("current", JSON.stringify(2));
                }}
                onLogout={e => {
                  this.setState({ status: "false", step: 0 });
                  localStorage.removeItem("token");
                  localStorage.removeItem("userD");
                  localStorage.removeItem("current");
                  setTimeout(window.location.reload(), 800);
                }}
              />
            ) : null}
            {this.state.step === 2 ? (
              <ContestScreen
                contestData={this.state.selectConstest}
                onIncrease={e => {
                  this.setState({ step: 3, selectProgram: e });
                  localStorage.setItem("current", JSON.stringify(3));
                }}
                onLogout={e => {
                  this.setState({ status: "false", step: 0 });
                  localStorage.removeItem("token");
                  localStorage.removeItem("userD");
                  localStorage.removeItem("current");
                  setTimeout(window.location.reload(), 800);
                }}
                OnDecrease={e => {
                  this.setState({ step: 1 });
                  localStorage.setItem("current", JSON.stringify(1));
                }}
              />
            ) : null}
            {this.state.step === 3 ? (
              <Problem
                program={this.state.selectProgram}
                OnDecrease={e => {
                  this.setState({ step: 1 });
                  localStorage.setItem("current", JSON.stringify(2));
                }}
                onLogout={e => {
                  this.setState({ status: "false", step: 0 });
                  localStorage.removeItem("token");
                  localStorage.removeItem("userD");
                  localStorage.removeItem("current");
                  setTimeout(window.location.reload(), 800);
                }}
              />
            ) : null}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
