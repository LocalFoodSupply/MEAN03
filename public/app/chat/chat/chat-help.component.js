System.register(["@angular/core"], function (exports_1, context_1) {
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
    var core_1, ChatHelpComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ChatHelpComponent = (function () {
                function ChatHelpComponent() {
                }
                return ChatHelpComponent;
            }());
            ChatHelpComponent = __decorate([
                core_1.Component({
                    selector: 'chat-help',
                    template: "\n    <h2>Start a new conversation with someone</h2>\n  "
                }),
                __metadata("design:paramtypes", [])
            ], ChatHelpComponent);
            exports_1("ChatHelpComponent", ChatHelpComponent);
        }
    };
});
//# sourceMappingURL=chat-help.component.js.map