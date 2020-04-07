import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateIssue from "../issues/new";
import EditIssue from "../issues/edit";
import IssuesList from "../issues/list";


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (

        <Router>
        <div className="containr">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Issue Tracker</Link>
            
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Issues</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Issue</Link>
                </li>
                <li>
            </li>

              </ul>
              <button
              style={{
                borderRadius: "3px",
                marginTop: "0"
              }}
              onClick={this.onLogoutClick}
            >
              Hi, {user.name.split(" ")[0]}! Logout here
            </button>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={IssuesList} />
          <Route path="/edit/:id" component={EditIssue} />
          <Route path="/create" component={CreateIssue} />
        </div>
      
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            
          </div>
          </div>
      </div>
      </Router>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
