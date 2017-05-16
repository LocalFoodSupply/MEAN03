// Load the module dependencies
const config = require('./config');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const configureSocket = require('./socketio');
const flash = require('connect-flash');


// 模块的引入主要在express，再使用 app.use(flash())注册

// Define the Express configuration method
module.exports = function(db) {
	// Create a new Express application instance
	const app = express();
	const server = http.createServer(app);
    const io = socketio.listen(server);
	// Use the 'NDOE_ENV' variable to activate the 'morgan' logger or 'compress' middleware
	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production') {
		app.use(compress());
	}

	// Use the 'body-parser' and 'method-override' middleware functions
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	app.disable('x-powered-by');

    const mongoStore = new MongoStore({
    mongooseConnection: db.connection
  });

	// Configure the 'session' middleware
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret,
		store: mongoStore
	}));
    app.use(function(req, res, next) {
        req.resources = req.resources || {};

        next();
    });
	// Set the application view engine and 'views' folder
	app.set('views', './app/views');
	app.set('view engine', 'ejs');

    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());


	// Configure static file serving
	app.use('/', express.static(path.resolve('./public')));
	app.use('/lib', express.static(path.resolve('./node_modules')));
	//先解决依赖 在搞路由 顺序相反导致js文件不能正确加载
    require('../app/routes/index.server.routes.js')(app);
     require('../app/routes/users.server.routes.js')(app);
    require("../app/routes/category.server.routes")(app);
     require("../app/routes/product.server.routes")(app);
    require("../app/routes/thread.server.route")(app);
	configureSocket(server, io, mongoStore);
	// Return the Express application instance
	return server;
};