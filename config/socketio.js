// Load the module dependencies
const config = require('./config');
const cookieParser = require('cookie-parser');
const passport = require('passport');
// Define the Socket.io configuration method
module.exports = function(server, io, mongoStore) {
    const configureChat = require('../app/controllers/chat.server.controller');
    //必需在模块导出的内部 不然不可以使用模型
    const  connectedClients = {};
	// Intercept Socket.io's handshake request
    io.use((socket, next) => {
    	// Use the 'cookie-parser' module to parse the request cookies
        cookieParser(config.sessionSecret)(socket.request, {}, (err) => {
        	// Get the session id from the request cookies
            var sessionId = socket.request.signedCookies['connect.sid'];

            // Use the mongoStorage instance to get the Express session information
            mongoStore.get(sessionId, (err, session) => {
            	// Set the Socket.io session information
                socket.request.session = session;
               let user = socket.request.session.passport.user;
                if (!user) {
                     let err = new Error('Unauthorized');
                      err.type = 'unauthorized';
                      return next(err);
                }
                socket.user = {_id: socket.request.session.passport.user};
                passport.initialize()(socket.request, {}, () => {
                    passport.session()(socket.request, {}, () => {
                        if (socket.request.user) {
                            next(null, true);
                        } else {
                            next(new Error('User is not authenticated'), false);
                        }
                    });
                });
                // Use Passport to populate the user details
            });
        });
     });
	
	// Add an event listener to the 'connection' event
    io.on('connection', (socket) => {
    	// Load the chat controller
        console.info(socket.request.session.passport.user,socket.id,
            socket.request.session.user,socket.request.user);
        connectedClients[socket.request.session.passport.user] = socket;
        configureChat(socket, connectedClients,io);
    });
};