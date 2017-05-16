System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters: [],
        execute: function () {
            User = (function () {
                function User(_id, email, username, created) {
                    this._id = _id;
                    this.email = email;
                    this.username = username;
                    this.avatar = 'http://www.gravatar.com/avatar/{{hash}}?s=50&r=g&d=retro'.replace('{{hash}}', _id);
                    this.created = created;
                }
                return User;
            }());
            exports_1("User", User);
        }
    };
});
//# sourceMappingURL=user.js.map