const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const issueRoutes = express.Router();
const PORT = process.env.PORT || 4000;

let Issue = require("../../models/Issue");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect( process.env.MONGODB_URI ||
  "mongodb+srv://admin:iKLF17JTfEQrvOa1@cluster0-6oqrf.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB issues database connection established successfully");
});

issueRoutes.route("/").get(function(req, res) {
  Issue.find(function(err, issues) {
    if (err) {
      console.log(err);
    } else {
      res.json(issues);
    }
  });
});

issueRoutes.route("/:id").get(function(req, res) {
  let id = req.params.id;
  Issue.findById(id, function(err, issue) {
    res.json(issue);
  });
});

issueRoutes.route("/update/:id").post(function(req, res) {
  Issue.findById(req.params.id, function(err, issue) {
    if (!issue) res.status(404).send("data is not found");
    else 
    issue.issue_title = req.body.issue_title;
    issue.issue_description = req.body.issue_description;
    issue.issue_type = req.body.issue_type;
    issue.issue_priority = req.body.issue_priority;
    issue.issue_status = req.body.issue_status;
    issue.issue_createdby = req.body.issue_createdby;
    issue.issue_usersinvolved = req.body.issue_usersinvolved;
    issue.issue_createdon = req.body.issue_createdon;
    issue.issue_deadline = req.body.issue_deadline;
    issue.issue_comments = req.body.issue_comments;
    issue.issue_completed = req.body.issue_completed;
    
    issue
      .save()
      .then(issue => {
        res.json("Issue updated!");
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});

issueRoutes.route("/add").post(function(req, res) {
  let issue = new Issue(req.body);
  issue
    .save()
    .then(issue => {
      res.status(200).json({ issue: "issue added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding new issue failed");
    });
});

app.use("/", issueRoutes);

module.exports = issueRoutes;