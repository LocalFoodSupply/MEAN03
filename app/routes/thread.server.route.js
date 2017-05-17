/**
 * Created by root on 17-5-16.
 */
const express = require('express');
const threadCtrl = require('../controllers/thread.server.controller');
const messageCtrl = require('../controllers/message.server.controller');
const auth = require('../middlewares/authentication');
const authorize = require('../middlewares/authorization');
const response = require('../helpers/response');


module.exports = function(app){
app.get(
  '/api/threads',
  //auth.ensured,
  threadCtrl.allByUser,
  response.toJSON('threads')
);

app.post(
  '/api/thread/open',
  auth.ensured,
  threadCtrl.find,
  threadCtrl.open,
  response.toJSON('thread')
);
app.get(
  '/api/threads/:threadId',
  auth.ensured,
  threadCtrl.findById,
  authorize.onlyParticipants('thread'),
  response.toJSON('thread')
);
app.get(
  '/api/threads/:threadId/messages',
  auth.ensured,
  threadCtrl.findById,
  //authorize.onlyParticipants('thread'),
  messageCtrl.findByThread,
  response.toJSON('messages')
);

};