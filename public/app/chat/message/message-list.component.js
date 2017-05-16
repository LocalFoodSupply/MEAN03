System.register(["@angular/core", "@angular/router", "../services/message.service", "../services/thread.service", "../datatypes/thread"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, message_service_1, thread_service_1, thread_1, MessageListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (message_service_1_1) {
                message_service_1 = message_service_1_1;
            },
            function (thread_service_1_1) {
                thread_service_1 = thread_service_1_1;
            },
            function (thread_1_1) {
                thread_1 = thread_1_1;
            }
        ],
        execute: function () {
            MessageListComponent = (function () {
                function MessageListComponent(messageService, threadService, _route) {
                    var _this = this;
                    this._route = _route;
                    this.messages = [];
                    this._messageService = messageService;
                    this._threadService = threadService;
                    this._messageService.messages.subscribe(function (messages) { return _this.messages = messages; });
                    this._route.params.subscribe(function (params) {
                        var threadId;
                        threadId = params['identifier'];
                        _this._threadService.setCurrentThread(new thread_1.Thread(threadId));
                        _this._messageService.getByThread(threadId);
                    });
                }
                return MessageListComponent;
            }());
            MessageListComponent = __decorate([
                core_1.Component({
                    selector: 'message-list',
                    template: "\n      <div class=\"message-list\">\n        <div *ngIf=\"messages.length === 0\" class=\"empty-message-list\">\n          <h3>No messages so far :)</h3>\n        </div>\n        <message\n          *ngFor=\"let message of messages\"\n          [message]=\"message\"\n          ></message>\n      </div>\n    "
                }),
                __metadata("design:paramtypes", [message_service_1.MessageService,
                    thread_service_1.ThreadService,
                    router_1.ActivatedRoute])
            ], MessageListComponent);
            exports_1("MessageListComponent", MessageListComponent);
        }
    };
});
//# sourceMappingURL=message-list.component.js.map