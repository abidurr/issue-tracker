import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="container valign-wrapper">
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
            
            To continue,
              <Link to="/register"> Register </Link>
            or
              <Link to="/login" > Log In </Link>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
