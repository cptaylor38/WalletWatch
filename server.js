require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 5000;
const passport = require('passport');
const keys = require('./config');
const cookieSession = require('cookie-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/users');


try{
  mongoose.connect(`${process.env.MONGODB_URI}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
  });
}
catch(err){
  console.log(err);
}

passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((id, cb) => {
  User.findById(id).then(user => {
    cb(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE.clientID,
      clientSecret: keys.GOOGLE.clientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, cb) => {
        User.findOne({ username: profile.displayName })
            .then(currentUser => 
              {
                if (currentUser) 
                {
                  if (currentUser.googleId !== profile.id) 
                  {
                    User.findOneAndUpdate({ googleId: profile.id })
                        .then(updatedUser => cb(null, updatedUser))
                        .catch(err => {
                          res.send(err);
                          console.log(err);
                        });
                  } 
                  else 
                  {
                    cb(null, currentUser);
                  }
                }
                else 
                {
                  new User({ username: profile.displayName, googleId: profile.id })
                          .save()
                          .then(newUser => cb(null, newUser))
                          .catch(err => console.log(err));
                }
            })
            .catch((response)=> console.log(response));
    }
  )
);

const app = express();

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.SESSION.cookieKey]
  })
);

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

app.get('/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    console.log(req, '/auth/google/callback')
    res.redirect('/profile');
  }
);

app.get('/user', (req, res) => {
  res.send(req.user);
});

app.get('/auth/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});



app.use(routes);
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
