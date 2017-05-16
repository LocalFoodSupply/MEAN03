System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Thread;
    return {
        setters: [],
        execute: function () {
            Thread = (function () {
                function Thread(_id, name, participants, createdAt) {
                    this._id = _id;
                    this.name = name || '';
                    this.participants = participants || [];
                    this.createdAt = createdAt;
                }
                Thread.prototype.generateName = function (omittedUser) {
                    var names = [];
                    this.participants.map(function (participant) {
                        if (omittedUser._id !== participant._id) {
                            names.push(participant.username);
                        }
                    });
                    return (names[1]) ? names.join(', ') : names[0];
                };
                return Thread;
            }());
            exports_1("Thread", Thread);
        }
    };
});
//# sourceMappingURL=thread.js.map