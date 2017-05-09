const users = require('../../app/controllers/users.server.controller');
//路由使用控制器中的方法
const passport = require('passport');

//在express.js中设置使用本文件作为路由
module.exports = function(app) {  app.route('/users')
.post(users.create)
.get(users.list);

 app.route('/users/:userId').get(users.read)
 .put(users.update)
 .delete(users.delete);
 app.param('userId', users.userByID);


app.route('/users/name/:username').get(users.read);
app.param('username', users.userByUsername);
};

//用户登录方法

module.exports = function(app) {
  app.route('/api/auth/signup').post(users.signup);
  app.route('/api/auth/signin').post(users.signin);
  /*app.route('/signin').post(passport.authenticate('local', {
       successRedirect: '/',
       failureRedirect: '/signin',
       failureFlash: true}));*/
  app.get('/api/auth/signout', users.signout);};