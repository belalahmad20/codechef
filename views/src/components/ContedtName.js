import React, { PureComponent } from "react";

export default class ContedtName extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <main>
          <div
            className="header"
            style={{
              boxShadow: "0px 4px 20px 0px rgba(199, 199, 199, 0.4) ",
              position: "fixed",
              width: "100%"
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
              <div className="row">
              <i className="ion-ios-search"></i>
                  <input placeholder="Enter Contest Name / Content Code" />
                  
              </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
