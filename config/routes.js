
var async = require('async')

module.exports = function (app, passport, auth) {

  // user routes
  var users = require('../app/controllers/users')
  app.get('/signin', users.signin)
  app.get('/signup', users.signup)
  app.get('/signout', users.signout)
  app.post('/users', users.create)
  app.post('/users/session', passport.authenticate('local', {failureRedirect: '/signin', failureFlash: 'Invalid email or password.'}), users.session)
  app.get('/users/me', users.me)
  app.get('/users/:userId', users.show)
  
  app.param('userId', users.user)
  
  // home route
  var index = require('../app/controllers/index')
  //app.get('/', index.render)
  
  app.get('/', function(req, res) {
    //res.json({ user: req.user });
    res.render('index.html', {
      user: JSON.stringify(req.user)
    });
  });
}
