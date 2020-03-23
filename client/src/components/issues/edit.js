import React, { Component } from "react";
import axios from "axios";

export default class EditIssue extends Component {
  constructor(props) {
    super(props);

    this.onChangeIssueTitle = this.onChangeIssueTitle.bind(this);
    this.onChangeIssueDescription = this.onChangeIssueDescription.bind(this);
    this.onChangeIssueType = this.onChangeIssueType.bind(this);
    this.onChangeIssuePriority = this.onChangeIssuePriority.bind(this);
    this.onChangeIssueStatus = this.onChangeIssueStatus.bind(this);
    this.onChangeIssueCreatedby = this.onChangeIssueCreatedby.bind(this);
    this.onChangeIssueUsersinvolved = this.onChangeIssueUsersinvolved.bind(
      this
    );
    this.onChangeIssueCreatedon = this.onChangeIssueCreatedon.bind(this);
    this.onChangeIssueDeadline = this.onChangeIssueDeadline.bind(this);
    this.onChangeIssueComments = this.onChangeIssueComments.bind(this);
    this.onChangeIssueCompleted = this.onChangeIssueCompleted.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      issue_title: "",
      issue_description: "",
      issue_type: "",
      issue_priority: "",
      issue_status: "",
      issue_createdby: "",
      issue_usersinvolved: "",
      issue_createdon: "",
      issue_deadline: "",
      issue_comments: "",
      issue_completed: false
    };
  }

  componentDidMount() {
    axios
      .get("/issues/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          issue_title: response.data.issue_title,
          issue_description: response.data.issue_description,
          issue_type: response.data.issue_type,
          issue_priority: response.data.issue_priority,
          issue_status: response.data.issue_status,
          issue_createdby: response.data.issue_createdby,
          issue_usersinvolved: response.data.issue_usersinvolved,
          issue_createdon: response.data.issue_createdon,
          issue_deadline: response.data.issue_deadline,
          issue_comments: response.data.issue_comments,
          issue_completed: response.data.issue_completed
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeIssueTitle(e) {
    this.setState({
      issue_title: e.target.value
    });
  }
  onChangeIssueDescription(e) {
    this.setState({
      issue_description: e.target.value
    });
  }
  onChangeIssueType(e) {
    this.setState({
      issue_type: e.target.value
    });
  }
  onChangeIssuePriority(e) {
    this.setState({
      issue_priority: e.target.value
    });
  }
  onChangeIssueStatus(e) {
    this.setState({
      issue_status: e.target.value
    });
  }
  onChangeIssueCreatedby(e) {
    this.setState({
      issue_createdby: e.target.value
    });
  }
  onChangeIssueUsersinvolved(e) {
    this.setState({
      issue_usersinvolved: e.target.value
    });
  }
  onChangeIssueCreatedon(e) {
    this.setState({
      issue_createdon: e.target.value
    });
  }
  onChangeIssueDeadline(e) {
    this.setState({
      issue_deadline: e.target.value
    });
  }
  onChangeIssueComments(e) {
    this.setState({
      issue_comments: e.target.value
    });
  }
  onChangeIssueCompleted(e) {
    this.setState({
      issue_completed: !this.state.issue_completed
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      issue_title: this.state.issue_title,
      issue_description: this.state.issue_description,
      issue_type: this.state.issue_type,
      issue_priority: this.state.issue_priority,
      issue_status: this.state.issue_status,
      issue_createdby: this.state.issue_createdby,
      issue_usersinvolved: this.state.issue_usersinvolved,
      issue_createdon: this.state.issue_createdon,
      issue_deadline: this.state.issue_deadline,
      issue_comments: this.state.issue_comments,
      issue_completed: this.state.issue_completed
    };
    console.log(obj);
    axios
      .post(
        "/issues/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    // this.props.history.push("/");
    window.alert("Issue updated!");
  }

  render() {
    return (
      <div>
        <h3 align="center">Update Issue</h3>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.issue_title}
              onChange={this.onChangeIssueTitle}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.issue_description}
              onChange={this.onChangeIssueDescription}
            />
          </div>

          <div className="form-group">
            <label>Type (e.g. Android app v. 2.4): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.issue_type}
              onChange={this.onChangeIssueType}
            />
          </div>

          <div className="form-group">
            <label>Priority: </label> {"   "}
            <select
              value={this.state.issue_priority}
              onChange={this.onChangeIssuePriority}
            >
              <option value=""> - Change - </option>
              <option value="Low">Low (new feature, low importance)</option>
              <option value="Medium">Medium (moderate priority)</option>
              <option value="High">High (urgently needs fix)</option>
            </select>
          </div>

          <div className="form-group">
            <label>Status: </label> {"   "}
            <select
              value={this.state.issue_status}
              onChange={this.onChangeIssueStatus}
            >
              {" "}
              <option value=""> - Change - </option>
              <option value="Open">Open</option>
              <option value="In progress">In Progress</option>
              <option value="Under review">Under Review</option>
              <option value="Final Approval">Final Approval</option>
              <option value="Done">Done</option>
            </select>
          </div>

          <div className="form-group">
            <label>Created By: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.issue_createdby}
              onChange={this.onChangeIssueCreatedby}
            />
          </div>

          <div className="form-group">
            <label>Users Involved (e.g. Andriod team: Max, Emma, John): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.issue_usersinvolved}
              onChange={this.onChangeIssueUsersinvolved}
            />
          </div>

          <div className="form-group">
            <label>Created on: </label>
            <input
              type="date"
              className="form-control"
              defaultValue={Date.now}
              value={this.state.issue_createdon}
              onChange={this.onChangeIssueCreatedon}
            />
          </div>

          <div className="form-group">
            <label>Deadline: </label>
            <input
              type="date"
              className="form-control"
              value={this.state.issue_deadline}
              onChange={this.onChangeIssueDeadline}
            />
          </div>

          <div className="form-group">
            <label>Comments: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.issue_comments}
              onChange={this.onChangeIssueComments}
            />
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              id="completedCheckbox"
              type="checkbox"
              name="completedCheckbox"
              onChange={this.onChangeIssueCompleted}
              checked={this.state.issue_completed}
              value={this.state.issue_completed}
            />
            <label className="form-check-label" htmlFor="completedCheckbox">
              Completed
            </label>
          </div>

          <br />

          <div className="form-group">
            <input
              type="submit"
              value="Update Issue"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
