import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ paddingTop: "25%"}} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <img src="logo.png" alt="Logo" width="100px" />
              {"  "}<p><b>Issue Tracker</b>{" "}</p>
            </h4>
            <p className="flow-text grey-text text-darken-3">
              This is an issue tracking app created with the MERN stack
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  backgroundColor: "lime",
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                className="btn btn-large waves-effect waves-light hoverable green accent-5"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  backgroundColor: "lime",
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                className="btn btn-large waves-effect waves-light hoverable lightgreen accent-5"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
