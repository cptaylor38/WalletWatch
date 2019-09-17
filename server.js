require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 5000;
const passport = require('passport');
const FacebookStrategy = require("passport-facebook").Strategy;
const keys = require('./config');
const cookieSession = require('cookie-session');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require('./models/users');


passport.serializeUser((user, cb) => {
    cb(null, user);
});
passport.deserializeUser((id, cb) => {
    User.findById(id).then((user) => {
        cb(null, user);
    })
});

passport.use(new FacebookStrategy({
    clientID: keys.FACEBOOK.clientID,
    clientSecret: keys.FACEBOOK.clientSecret,
    callbackURL: "/auth/facebook/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        User.findOne({ username: profile.displayName }).then(currentUser => {
            if (currentUser) {
                if (currentUser.facebookId !== profile.id) {
                    User.findOneAndUpdate({ facebookId: profile.id }).then(updatedUser => cb(null, updatedUser)).catch(err => console.log(err));
                }
                else {
                    cb(null, currentUser);
                }
            }
            else {
                new User({ username: profile.displayName, facebookId: profile.id }).save().then((newUser => cb(null, newUser)).catch(err => console.log(err)));
            }
        })
    }));

passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE.clientID,
    clientSecret: keys.GOOGLE.clientSecret,
    callbackURL: "/auth/google/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        User.findOne({ username: profile.displayName }).then(currentUser => {
            if (currentUser) {
                if (currentUser.googleId !== profile.id) {
                    User.findOneAndUpdate({ googleId: profile.id }).then(updatedUser => cb(null, updatedUser));
                }
                else {
                    cb(null, currentUser);
                }
            }
            else {
                new User({ username: profile.displayName, googleId: profile.id }).save().then((newUser) => cb(null, newUser));
            }
        })
    }));

const app = express();

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.SESSION.cookieKey]
}))

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());


app.get("/auth/facebook", passport.authenticate("facebook"));
app.get("/auth/facebook/callback",
    passport.authenticate("facebook"),
    (req, res) => {
        res.redirect('/profile/');
    });

app.get("/auth/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}));
app.get("/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
        res.redirect('/profile/');
    });

app.get("/user", (req, res) => {
    res.send(req.user);
})

app.get("/auth/logout", (req, res) => {
    req.logout();
    res.redirect('/');
})

app.use(routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/PennyDb");

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
