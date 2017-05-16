/**
 * Created by root on 17-5-16.
 */

const User = require('mongoose').model('User');
const Thread = require('mongoose').model('Thread');
const Message = require('mongoose').model('Message');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports.findByThread = findMessagesByThread;

function findMessagesByThread(req, res, next) {
  let query = {
    thread: req.resources.thread._id
  };

  if (req.query.beforeId) {
    query._id = { $lt: new ObjectId(req.query.sinceId) };
  }

  Message
  .find(query)
  .populate('sender')
  .exec(function(err, messages) {
    if (err) {
      return next(err);
    }

    req.resources.messages = messages;
    next();
  });
}