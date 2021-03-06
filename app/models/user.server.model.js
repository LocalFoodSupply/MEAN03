const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
//需要引入crypto


const UserSchema = new Schema({
    firstName: String,  lastName: String,
    email: {type:String,index:true,match: /.+\@.+\..+/},
    username: {type:String,trim:true,unique:true,required:true},
    password: {type:String, validate: [function(password) {return password.length >= 6;}, 'Password should be longer']},
    salt: { type: String },
    provider: { type: String, required: 'Provider is required' },
    providerId: String, providerData: {},
    created: {type: Date,default: Date.now},
    role:{ type: String,enum: ['Admin', 'Owner', 'User']},
    website: {type: String,get: function(url) {if (!url) {return url;} else {if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {url = 'http://' + url;} return url;}}},});


UserSchema.virtual('fullName').get(function(){return this.firstName + ' ' + this.lastName;});
UserSchema.set('toJSON',{getters:true, virtuals: true});
UserSchema.statics.findOneByUsername = function(username, callback) {this.findOne({ username: new RegExp(username, 'i') }, callback);};


//静态方法程序实例化后不可用。


UserSchema.pre('save', function(next) {if (this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);}
        next();});

UserSchema.methods.hashPassword = function(password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000,64).toString('base64');};

UserSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};

UserSchema.statics.findUniqueUsername = function(username, suffix,
    callback) {
    var possibleUsername = username + (suffix || '');
    this.findOne({username: possibleUsername}, (err, user) => {
        if (!err)
          {if (!user) {callback(possibleUsername);}
          else {return this.findUniqueUsername(username, (suffix || 0) + 1, callback);}}
        else {callback(null);}});};

const PostSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: Schema.ObjectId, ref: 'User'}});
mongoose.model('Post', PostSchema);
mongoose.model('User', UserSchema);
//要放到最后才引入模型
