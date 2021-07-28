import express from 'express';
const path = require('path');
const passport = require('passport');
const auctionRouter = require("./routes/auctionRouter.ts");
const app = express();
const GitHubStrategy = require('passport-github').Strategy;

//import route handles from routes

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GitHubStrategy({
  clientID: "601f5bf1853f34406920",
  clientSecret: "257ac62d616e151dbe2251febf755ddf7e06d411",
  callbackURL: "http://localhost:3000/auth/github/callback"
},
function(accessToken: any, refreshToken: any, profile: any, cb: any) {
 //  User.findOrCreate({ githubId: profile.id }, function (err, user) {
 //    return cb(err, user);
 //  });
 console.log(profile)
 return cb(null, profile)
}
));

/**
 * handling parsing request body
 */
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));


// serve HTML page on /
app.get('/', (req, res, next) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.use('/api', auctionRouter);

app.get('/auth/github', passport.authenticate('github'));


app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

//default route handler
app.use('*', (req, res, next) => {
  res.sendStatus(400);
});

// default error handler 
app.use((error : object, request: any, response: any, next: any) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign(defaultErr, error);
  console.log(errorObj.log);
  return response.status(errorObj.status).send(errorObj.message);
});

//listening on port 3000
app.listen(3000, () => {
  console.log('server started');
});
