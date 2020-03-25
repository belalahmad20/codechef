import React, { PureComponent } from "react";
import axios from "axios";

export default class contestScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      problemlist: ["", ""],
      leaderboardlist: ["", ""]
    };
  }
  componentWillMount() {
    console.log(this.props.contestData);
    //Select all the data from this.props.contestData and use it in calling api as required
    axios.post("API URL HERE", this.props.contestData).then(response => {
      if (response.data.status === true) {
        // If login response is successfull white code here
        this.setState({
          problemlist: response.data.problemlist,
          leaderboardlist: response.data.leaderboardlist
        });
      } else {
        // If login response is unsuccessfull white code here
        alert("Some error Occured");
      }
    });
  }
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
          <div className=" container" style={{ paddingTop: "130px" }}>
            <div className="row">
              <div className="col-md-4">
                <div
                  className="navigate-back"
                  style={{ cursor: "pointer" }}
                  onClick={e => {
                    this.props.OnDecrease();
                  }}
                >
                  <i className="ion-ios-arrow-back"></i> Change Contest
                </div>
                <h4>Leaderboard</h4>
                <div className="with-border">
                  {this.state.leaderboardlist.map((item, index) => {
                    return (
                      <div className="single-leader-board">
                        <div className="avatar">
                          <img src="https://www.codechef.com/download/1-HP-CCDSA_SEB.jpg" />
                        </div>
                        <div className="leaderbardname">
                          <h5>Anubhav</h5>
                          <span>
                            5 <i className="ion-ios-star"></i>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <h4 style={{ marginTop: "40px" }}>Other Contest</h4>
                <div className="single-clouse">
                  <a href="#">
                    <img src="https://www.codechef.com/sites/all/themes/abessive/logo.svg" />
                    <h4 className="contentstitle">March Hackathon</h4>
                    <span className="contestcode">MAR10</span>
                    <span className="courseonliner">
                      Lorem egdfss hjsfsdj fsf kkfs shd j
                    </span>
                    <span className="coursegotolink">Enter contest</span>
                  </a>
                </div>
                <div className="single-clouse">
                  <a href="#">
                    <img src="https://www.codechef.com/sites/all/themes/abessive/logo.svg" />
                    <h4 className="contentstitle">March Hackathon</h4>
                    <span className="contestcode">MAR10</span>
                    <span className="courseonliner">
                      Lorem egdfss hjsfsdj fsf kkfs shd j
                    </span>
                    <span className="coursegotolink">Enter contest</span>
                  </a>
                </div>
                <div className="with-border"></div>
              </div>
              <div className="col-md-8">
                <h4>Problem Statements</h4>
                <div className="with-border">
                  {this.state.problemlist.map((item, index) => {
                    return (
                      <div className="single-problem-statement">
                        <h5>Problem statement</h5>
                        <p>
                          sg sf df fjkdfksdj fskjdf shk fsdk ksdf skdjfksjd skj
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <strong>Language: </strong>C, C++, JAVA, Python
                          </div>
                          <div>
                            <strong>Time: </strong> 75 MINUTES
                          </div>
                          <div
                            style={{ cursor: "pointer" }}
                            onClick={e => {
                              this.props.onIncrease({ data: "Data" });
                            }}
                          >
                            SOLVE QUESTION
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
