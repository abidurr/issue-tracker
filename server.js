const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const passport = require("passport");
const users = require("./routes/api/users");
const issues = require("./routes/api/issues");


const app = express();



if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());



// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
    .connect( process.env.MONGODB_URI ||
        db, {
        useNewUrlParser: true, useUnifiedTopology: true
    }
    )
    .then(() => console.log("MongoDB connection successful"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());


// Passport config
require("./config/passport")(passport);

// Routes

const User = db.model('User', users);
const Issue = db.model('Issue', issues);

app.use("/api/users", User);
app.use("/api/issues", Issue);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port}`));

