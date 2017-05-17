// Create the chat configuration
'use strict';
const mongoose = require('mongoose');
const User = require('mongoose').model('User');
const Thread = mongoose.model('Thread');
const Message = mongoose.model('Message');



module.exports = initInstantMessagingModule;

class InstantMessagingModule {
    constructor(socket, clients,io) {
    this.socket = socket;
    this.clients = clients;
    this.threads = {};
    this.bindHandlers();
  }
    bindHandlers() {
    this.socket.on('send:im', data => {
      data.sender = this.socket.user._id;

      if (!data.thread) {
        let err = new Error('You must be participating in a conversation.')
        err.type = 'no_active_thread';
        return this.handleError(err);
      }

      this.storeIM(data, (err, message, thread) => {
        console.log("store something");
        if (err) {
          return this.handleError(err);
        }

        this.socket.emit('send:im:success', message);

        this.deliverIM(message, thread);
      });
    });
  }
    storeIM(data, callback) {
    this.findThreadById(data.thread, (err, thread) => {
      if (err) {
        return callback(err);
      }

      let user = thread.participants.find((participant) => {
        return participant.toString() === data.sender.toString();
      });

      if (!user) {
        let err = new Error('Not a participant.')
        err.type = 'unauthorized_thread';
        return callback(err);
      }

      this.createMessage(data, (err, message) => {
        if (err) {
          return callback(err);
        }

        callback(err, message, thread);
      });
    });
  }


    findThreadById(id, callback) {
    if (this.threads[id]) {
      return callback(null, this.threads[id]);
    }

    Thread.findById(id, (err, thread) => {
      if (err) {
        return callback(err);
      }

      this.threads[id] = thread;
      callback(null, thread);
    });
  }
    createMessage(data, callback) {
    Message.create(data, (err, newMessage) => {
      if (err) {
        return callback(err);
      }
      newMessage.populate('sender', callback);
    });
  }
    deliverIM(message, thread) {
    for (let i = 0; i < thread.participants.length; i++) {
      if (thread.participants[i].toString() !== message.sender._id.toString()) {
          console.log(thread.participants[i].toString());
          console.log(message.sender.toString());
        this.clients[thread.participants[i]].emit('receive:im', message);
        //continue;
      }
     //前面已经使用pulate导致sender不是id，然后信息给传导你两遍，自身也变成了接受者
     /* if (this.clients[thread.participants[i]]) {
        console.log( message.sender);
        this.clients[thread.participants[i]].emit('receive:im', message);
      }*/
    }
  }
    handleError(err) {
    console.error(err);
    return socket.emit('send:im:failure', err);
    }
}

function initInstantMessagingModule(socket, clients) {
  return new InstantMessagingModule(socket, clients);
}



	// Emit the status event when a new socket client is connected
   /* io.emit('chatMessage', {
        type: 'status',
        text: 'connected',
        created: new Date().toLocaleString(),
        username: socket.request.user.username
    });

    // Send a chat messages to all connected sockets when a message is received 
    socket.on('chatMessage', (message) => {
        message.type = 'message';
        message.created =new Date().toLocaleString();
        message.username = socket.request.user.username;

        // Emit the 'chatMessage' event
        io.emit('chatMessage', message);
    });

    // Emit the status event when a socket client is disconnected
    socket.on('disconnect', () => {
        io.emit('chatMessage', {
            type: 'status',
            text: 'disconnected',
            created: new Date().toLocaleString(),
            username: socket.request.user.username
        });
    });*/

