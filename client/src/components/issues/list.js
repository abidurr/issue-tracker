import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Issue = props => (
  <tr>
    <td className={props.issue.issue_completed ? "completed" : ""}>
      {props.issue.issue_title}
    </td>
    <td className={props.issue.issue_completed ? "completed" : ""}>
      {props.issue.issue_description}
    </td>
    <td className={props.issue.issue_completed ? "completed" : ""}>
      {props.issue.issue_type}
    </td>
    <td className={props.issue.issue_completed ? "completed" : ""}>
      {props.issue.issue_priority}
    </td>
    <td className={props.issue.issue_completed ? "completed" : ""}>
      {props.issue.issue_status}
    </td>
    <td className={props.issue.issue_completed ? "completed" : ""}>
      {props.issue.issue_createdby}
    </td>
    <td className={props.issue.issue_completed ? "completed" : ""}>
      {props.issue.issue_usersinvolved}
    </td>
    <td className={props.issue.issue_completed ? "completed" : ""}>
      {props.issue.issue_createdon}
    </td>
    <td className={props.issue.issue_completed ? "completed" : ""}>
      {props.issue.issue_deadline}
    </td>
    <td className={props.issue.issue_completed ? "completed" : ""}>
      {props.issue.issue_comments}
    </td>
    <td>
      <Link to={"/edit/" + props.issue._id}>Edit</Link>
    </td>
  </tr>
);

export default class IssuesList extends Component {
  constructor(props) {
    super(props);
    this.state = { issues: [] };
  }

  componentDidMount() {
    axios
      .get("/issues/")
      .then(response => {
        this.setState({ issues: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  issueList() {
      return this.state.issues.map(function (currentIssue, i) {
        return <Issue issue={currentIssue} key={i} />;

      });
  }

  render() {
    return (
      <div>
        <h3>Issues list</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Type</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Created By</th>
              <th>Users Involved</th>
              <th>Created On</th>
              <th>Deadline</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>{this.issueList()}</tbody>
        </table>
      </div>
    );
  }
}
