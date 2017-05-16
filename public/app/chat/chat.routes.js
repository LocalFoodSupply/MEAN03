System.register(["./chat.component", "./message/message-list.component", "./chat/chat-help.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var chat_component_1, message_list_component_1, chat_help_component_1, ChatRoutes;
    return {
        setters: [
            function (chat_component_1_1) {
                chat_component_1 = chat_component_1_1;
            },
            function (message_list_component_1_1) {
                message_list_component_1 = message_list_component_1_1;
            },
            function (chat_help_component_1_1) {
                chat_help_component_1 = chat_help_component_1_1;
            }
        ],
        execute: function () {
            exports_1("ChatRoutes", ChatRoutes = [{
                    path: 'messages',
                    component: chat_component_1.ChatComponent,
                    children: [
                        { path: '', component: chat_help_component_1.ChatHelpComponent },
                        { path: ':identifier', component: message_list_component_1.MessageListComponent },
                    ],
                }]);
        }
    };
});
//# sourceMappingURL=chat.routes.js.map