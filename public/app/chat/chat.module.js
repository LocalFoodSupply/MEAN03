System.register(["@angular/core", "@angular/common", "@angular/forms", "@angular/router", "./chat.routes", "./services/chat.service", "./services/thread.service", "./services/message.service", "./services/user.service", "./chat.component", "./thread/thread-list.component", "./thread/thread.component", "./message/message-form.component", "./message/message.component", "./user/user-list.component", "./message/message-list.component", "./chat/chat-help.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, forms_1, router_1, chat_routes_1, chat_service_1, thread_service_1, message_service_1, user_service_1, chat_component_1, thread_list_component_1, thread_component_1, message_form_component_1, message_component_1, user_list_component_1, message_list_component_1, chat_help_component_1, ChatModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (chat_routes_1_1) {
                chat_routes_1 = chat_routes_1_1;
            },
            function (chat_service_1_1) {
                chat_service_1 = chat_service_1_1;
            },
            function (thread_service_1_1) {
                thread_service_1 = thread_service_1_1;
            },
            function (message_service_1_1) {
                message_service_1 = message_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (chat_component_1_1) {
                chat_component_1 = chat_component_1_1;
            },
            function (thread_list_component_1_1) {
                thread_list_component_1 = thread_list_component_1_1;
            },
            function (thread_component_1_1) {
                thread_component_1 = thread_component_1_1;
            },
            function (message_form_component_1_1) {
                message_form_component_1 = message_form_component_1_1;
            },
            function (message_component_1_1) {
                message_component_1 = message_component_1_1;
            },
            function (user_list_component_1_1) {
                user_list_component_1 = user_list_component_1_1;
            },
            function (message_list_component_1_1) {
                message_list_component_1 = message_list_component_1_1;
            },
            function (chat_help_component_1_1) {
                chat_help_component_1 = chat_help_component_1_1;
            }
        ],
        execute: function () {
            ChatModule = (function () {
                function ChatModule() {
                }
                return ChatModule;
            }());
            ChatModule = __decorate([
                core_1.NgModule({
                    imports: [
                        common_1.CommonModule,
                        forms_1.FormsModule,
                        router_1.RouterModule.forChild(chat_routes_1.ChatRoutes),
                    ],
                    declarations: [
                        chat_component_1.ChatComponent, thread_list_component_1.ThreadListComponent, message_form_component_1.MessageFormComponent, user_list_component_1.UserListComponent,
                        message_list_component_1.MessageListComponent, chat_help_component_1.ChatHelpComponent, thread_component_1.ThreadComponent, message_component_1.MessageComponent
                    ],
                    exports: [chat_component_1.ChatComponent, thread_list_component_1.ThreadListComponent, message_form_component_1.MessageFormComponent, user_list_component_1.UserListComponent,
                        message_list_component_1.MessageListComponent, chat_help_component_1.ChatHelpComponent, thread_component_1.ThreadComponent, message_component_1.MessageComponent],
                    providers: [
                        chat_service_1.ChatService, thread_service_1.ThreadService, message_service_1.MessageService, user_service_1.UserService,
                    ]
                })
            ], ChatModule);
            exports_1("ChatModule", ChatModule);
        }
    };
});
//# sourceMappingURL=chat.module.js.map