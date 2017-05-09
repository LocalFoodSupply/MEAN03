const User = require('mongoose').model('User');
const passport = require('passport');

function getErrorMessage(err) {
  let message = '';
  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = 'Username already exists';
        break;
      default:
        message = 'Something went wrong';}}
  else {for (var errName in err.errors) {
      if (err.errors[errName].message)
      message = err.errors[errName].message;}}
  return message;};
//查找数据库错误用err.code表示，认证错误用errName

exports.create = function(req, res, next) {  const user = new User(req.body); 
     user.save((err) => {    if (err) {      return next(err);    
         } else {      res.status(200).json(user);    }  
    });
};
exports.list = function(req, res, next) { 
     User.find({},(err, users) => {    
         if (err) {      return next(err);    
             } else {      res.status(200).json(users);    }  });};
exports.read = function(req, res) {
  res.json(req.user);
};

exports.userByID = function(req, res, next, id) {
  User.findOne({
    _id: id
  }, 'username email',(err, user) => {
    if (err) {
      return next(err);
    } else {
      req.user = user;
      next();
    }
  });
};
exports.userByUsername= function(req, res, next, username) {
    User.findOne({
        'username': username
    },(err, user) => {
        if (err) {
            return next(err);
        } else {
            req.user = user;
            next();
        }
    });
};
exports.update = function(req, res, next) {
  User.findByIdAndUpdate(req.user.id, req.body, {
    'new': true
  }, (err, user) => {
    if (err) {
      return next(err);
    } else {
      res.status(200).json(user);
    }
  });
};
exports.delete = function(req, res, next) {
  req.user.remove(err => {
    if (err) {
      return next(err);
    } else {
      res.status(200).json(req.user);
    }
  })
};

//页面渲染操作
/*exports.renderSignin = function(req, res, next) {
  if (!req.user) {
    res.render('signin', {
      title: 'Sign-in Form',
      messages: req.flash('error') || req.flash('info')});}
   else {return res.redirect('/');}};

exports.renderSignup = function(req, res, next) {
  if (!req.user) {
    res.render('signup', {
      title: 'Sign-up Form',
      messages: req.flash('error')
    });}
  else {return res.redirect('/');}};*/

//登入登出操作
exports.signin = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err || !user) {res.status(400).send(info);}
    else {// Remove sensitive data before login
      user.password = undefined;
      user.salt = undefined;
      req.login(user, function(err) {
        if (err) {res.status(400).send(err);}
        else {res.json(user);}});}})(req, res, next);};

// Create a new controller method that creates new 'regular' users
exports.signup = function(req, res) {
    const user = new User(req.body);
    user.provider = 'local';

    // Try saving the User
    user.save((err) => {
        if (err) {return res.status(400).send({message: getErrorMessage(err)});}
        else {// Remove sensitive data before login
            user.password = undefined;
            user.salt = undefined;
            // Login the user
            req.login(user, function(err) {
                if (err) {res.status(400).send(err);}
                else {res.json(user);}});}});}

/*exports.signup = function(req, res, next) {
  if (!req.user) {
    const user = new User(req.body);
    user.provider = 'local';
    user.save((err) => {
      if (err) {
        const message = getErrorMessage(err);
        req.flash('error', message);
        //将message内容传递给flash中的error
        return res.redirect('/signup');}
      req.login(user, (err) => {
        if (err) return next(err);
        //先处理错误，没错无才进行保存
        return res.redirect('/');});});}
    else {return res.redirect('/');}};*/

exports.signout = function(req, res) {
  req.logout();
  res.redirect('/');};



//登入操作采用passport.authenticate可直接在路由中调用，会自动使用req.login
// 把用户登录信息保存到session中