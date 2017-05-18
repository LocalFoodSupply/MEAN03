System.register(["@angular/core", "./chat.service", "../authentication/authentication.service", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, chat_service_1, authentication_service_1, router_1, ChatComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (chat_service_1_1) {
                chat_service_1 = chat_service_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            ChatComponent = (function () {
                function ChatComponent(_chatService, _authenticationService, _router) {
                    this._chatService = _chatService;
                    this._authenticationService = _authenticationService;
                    this._router = _router;
                    if (!this._authenticationService.isLoggedIn()) {
                        this._router.navigate(['signin']);
                    }
                    console.log("gg");
                }
                ChatComponent.prototype.ngOnInit = function () {
                    if (!this._authenticationService.isLoggedIn()) {
                        this._router.navigate(['signin']);
                    }
                    //导航到其他页面并不会使得服务销毁,原来页面的组件可以等待认证后才予以显示，如message-form
                };
                ;
                ChatComponent.prototype.ngOnDestroy = function () {
                    console.log("destroy it ");
                };
                return ChatComponent;
            }());
            ChatComponent = __decorate([
                core_1.Component({
                    selector: 'chat',
                    templateUrl: 'app/chat/chat.template.html',
                    providers: [chat_service_1.ChatService]
                }),
                __metadata("design:paramtypes", [chat_service_1.ChatService,
                    authentication_service_1.AuthenticationService,
                    router_1.Router])
            ], ChatComponent);
            exports_1("ChatComponent", ChatComponent);
        }
    };
});
//# sourceMappingURL=chat.component.js.map