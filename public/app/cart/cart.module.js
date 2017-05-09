System.register(["@angular/core", "@angular/common", "@angular/forms", "@angular/router", "./cart-menu.component", "./cart-view.component", "./cart.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, forms_1, router_1, cart_menu_component_1, cart_view_component_1, cart_service_1, CartModule;
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
            function (cart_menu_component_1_1) {
                cart_menu_component_1 = cart_menu_component_1_1;
            },
            function (cart_view_component_1_1) {
                cart_view_component_1 = cart_view_component_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            }
        ],
        execute: function () {
            CartModule = (function () {
                function CartModule() {
                }
                return CartModule;
            }());
            CartModule = __decorate([
                core_1.NgModule({
                    imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule],
                    declarations: [cart_menu_component_1.CartMenuComponent, cart_view_component_1.CartViewComponent],
                    exports: [cart_menu_component_1.CartMenuComponent, cart_view_component_1.CartViewComponent],
                    providers: [cart_service_1.CartService]
                })
            ], CartModule);
            exports_1("CartModule", CartModule);
        }
    };
});
//# sourceMappingURL=cart.module.js.map