System.register(["@angular/core", "@angular/platform-browser", "@angular/forms", "./cart/cart.module", "./category/category.module", "./product/product.module", "@angular/common", "./checkout/checkout-view.component", "./app.component", "./navbar/navbar.component", "./footer/footer.component", "./welcome/welcome.component", "@angular/router", "@angular/http", "./app.routes", "./authentication/authentication.service", "./authentication/authentication.module"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, forms_1, cart_module_1, category_module_1, product_module_1, common_1, checkout_view_component_1, app_component_1, navbar_component_1, footer_component_1, welcome_component_1, router_1, http_1, app_routes_1, authentication_service_1, authentication_module_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (cart_module_1_1) {
                cart_module_1 = cart_module_1_1;
            },
            function (category_module_1_1) {
                category_module_1 = category_module_1_1;
            },
            function (product_module_1_1) {
                product_module_1 = product_module_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (checkout_view_component_1_1) {
                checkout_view_component_1 = checkout_view_component_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (authentication_module_1_1) {
                authentication_module_1 = authentication_module_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, authentication_module_1.AuthenticationModule, http_1.HttpModule,
                        router_1.RouterModule.forRoot(app_routes_1.AppRoutes), cart_module_1.CartModule, category_module_1.CategoryModule, product_module_1.ProductModule],
                    declarations: [app_component_1.AppComponent, navbar_component_1.NavbarComponent, footer_component_1.FooterComponent, checkout_view_component_1.CheckoutViewComponent,
                        welcome_component_1.WelcomeComponent],
                    providers: [authentication_service_1.AuthenticationService, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
                    ],
                    bootstrap: [app_component_1.AppComponent]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map