import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i> Back to home </i>
            </Link>
            <p>{"   "}</p>
            <div className="col s12">
              <h3>Register below</h3>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <label htmlFor="email">Your name:</label>
                {"   "}
                <span className="red-text">{errors.name}</span>
                <br />
                <input
                  placeholder="Your Name"
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className="home-input-box"
                />
                <br />
              </div>
              <div className="input-field col s12">
                <label htmlFor="email">Email:</label>
                {"   "}
                <span className="red-text">{errors.email}</span>
                <br />
                <input
                  placeholder="Email"
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className="home-input-box"
                />
                <br />
              </div>
              <div className="input-field col s12">
                <label htmlFor="password">Choose a password:</label>
                {"   "}
                <span className="red-text">{errors.password}</span>
                <br />
                <input
                  placeholder="Password"
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className="home-input-box"
                />
                <br />
              </div>
              <div className="input-field col s12">
                <label htmlFor="password2">Re-enter chosen password:</label>
                {"   "}
                <span className="red-text">{errors.password2}</span>
                <input
                  placeholder="Confirm Password"
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className="home-input-box"
                />
                <br />
              </div>
              <div className="col s12">
                <button
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable lightgreen accent-5"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
