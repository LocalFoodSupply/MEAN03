// Load the module dependencies
const config = require('./config');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');


// 模块的引入主要在express，再使用 app.use(flash())注册

// Define the Express configuration method
module.exports = function() {
	// Create a new Express application instance
	const app = express();

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


	// Configure the 'session' middleware
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));

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
	// Return the Express application instance
	return app;
};