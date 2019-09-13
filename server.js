require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 5000;
const passport = require('passport');
const FacebookStrategy = require("passport-facebook").Strategy;
const keys = require('./config');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
let user = {};


passport.serializeUser((user, cb) => { cb(null, user) });
passport.deserializeUser((user, cb) => { cb(null, user) });

passport.use(new FacebookStrategy({
    clientID: keys.FACEBOOK.clientID,
    clientSecret: keys.FACEBOOK.clientSecret,
    callbackURL: "/auth/facebook/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        user = { ...profile };
        return cb(null, profile);
    }));

passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE.clientID,
    clientSecret: keys.GOOGLE.clientSecret,
    callbackURL: "/auth/google/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        user = { ...profile };
        return cb(null, profile);
    }));

const app = express();
app.use(cors());
app.use(passport.initialize());

app.get("/auth/facebook", passport.authenticate("facebook"));
app.get("/auth/facebook/callback",
    passport.authenticate("facebook"),
    (req, res) => {
        console.log('facebook authenticated');
        res.redirect("/profile");
    });

app.get("/auth/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}));
app.get("/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
        res.redirect("/profile");
    });

app.get("/user", (req, res) => {
    res.send(user);
})

app.get("/auth/logout", (req, res) => {
    res.redirect("/");
})

app.use("/", routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/WalletWatchDb");

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
