const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Issue = new Schema({
    issue_title: {
        type: String
    },
    issue_description: {
        type: String
    },
    issue_type: {
        type: String
    },
    issue_priority: {
        type: String
    },
    issue_status: {
        type: String
    },
    issue_createdby: {
        type: String
    },
    issue_usersinvolved: {
        type: String
    },
    issue_createdon: {
        type: String
    },
    issue_deadline: {
        type: String
    },
    issue_comments: {
        type: String
    },
    issue_completed: {
        type: Boolean
    }

});

module.exports = mongoose.model('Issue', Issue);