import React, { PureComponent } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";

export default class ContedtName extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      contentsList: ["", ""]
    };
  }
  search = e => {
    let data = {
      keyname: e.target.value
    };
    axios.post("API URL HERE", data).then(response => {
      if (response.data.status === true) {
        // If login response is successfull white code here
        this.setState({
          contentsList: response.data.data // enter the list from response here
        });
      } else {
        // If login response is unsuccessfull white code here
        alert("Unable to fetch");
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
            <div className="align-items-center container d-flex justify-content-between main-div p-2">
              <div className="logo-div">
                <img
                  src="https://www.codechef.com/sites/all/themes/abessive/logo.svg"
                  style={{ width: "140px" }}
                />
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={e => {
                  this.props.onLogout();
                }}
              >
                <span>Logout</span>
              </div>
            </div>
          </div>
          <div className=" container">
            <div className="" style={{ paddingTop: "20%" }}>
              <div
                className="align-items-center d-flex justify-content-center mb-5 row"
                style={{ margin: "0 auto" }}
              >
                <i className="ion-ios-search"></i>
                <input
                  className="entercontestinput"
                  placeholder="Enter Contest Name / Content Code"
                  onChange={e => {
                    this.search(e);
                  }}
                />
              </div>
              <div className="courses row">
                {this.state.contentsList.map((item, index) => {
                  return (
                    <div className="col-md-3">
                      <div className="single-clouse">
                        <a
                          onClick={e => {
                            e.preventDefault();
                            this.props.onIncrease({ somekey: "somedata" });
                          }}
                          href="#"
                        >
                          {/* send the data of the selected contest in the ONINcrease function */}
                          <img src="https://www.codechef.com/sites/all/themes/abessive/logo.svg" />
                          <h4 className="contentstitle">March Hackathon</h4>
                          <span className="contestcode">MAR10</span>
                          <span className="courseonliner">
                            Lorem egdfss hjsfsdj fsf kkfs shd j
                          </span>
                          <span className="coursegotolink">Enter contest</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
