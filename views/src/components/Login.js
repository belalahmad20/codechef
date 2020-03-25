import React, { PureComponent } from "react";
import axios from "axios";

export default class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  Login = e => {
    let data = {
      email: this.state.email,
      password: this.state.password
    };
    // Change the keys of the data object acccording to the api
    axios.post("API URL HERE", data).then(response => {
      if (response.data.status === true) {
        // If login response is successfull white code here
        localStorage.setItem(
          "userD",
          JSON.stringify(response.data.userdetails)
        ); // pass the userdetails object in this
        localStorage.setItem("token", JSON.stringify(response.data.token)); // pass the token string in this
        this.props.onLogin();
      } else {
        // If login response is unsuccessfull white code here
        alert("Invalid login");
      }
    });
  };
  componentWillMount() {}
  render() {
    return (
      <React.Fragment>
        <main>
          <div
            className="header"
            style={{
              boxShadow: "0px 4px 20px 0px rgba(199, 199, 199, 0.4) ",
              position: "fixed",
              width: "100%",
              zIndex: "99999",
              background: "white",
              top: "0"
            }}
          >
            <div className="main-div container d-flex align-items-center p-2">
              <div className="logo-div">
                <img
                  src="https://www.codechef.com/sites/all/themes/abessive/logo.svg"
                  style={{ width: "140px" }}
                />
              </div>
            </div>
          </div>
          <div className="login-form-container container">
            <div className="boxxed-form">
              <form
                onSubmit={e => {
                  e.preventDefault();
                  this.Login();
                }}
              >
                <h4 class="logintitle">Login to continue</h4>
                <input
                  required
                  placeholder="Enter Email"
                  type="email"
                  onChange={e => {
                    this.setState({ email: e.target.value });
                  }}
                />
                <input
                  required
                  placeholder="Enter Password"
                  type="password"
                  onChange={e => {
                    this.setState({ password: e.target.value });
                  }}
                />
                <input className="login-subtmi" type="submit" value="Login" />
              </form>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
