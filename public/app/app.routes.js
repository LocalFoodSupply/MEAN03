System.register(["./welcome/welcome.component", "./product/product-list.component", "./product/product-view.component", "./cart/cart-view.component", "./checkout/checkout-view.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var welcome_component_1, product_list_component_1, product_view_component_1, cart_view_component_1, checkout_view_component_1, AppRoutes;
    return {
        setters: [
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (product_list_component_1_1) {
                product_list_component_1 = product_list_component_1_1;
            },
            function (product_view_component_1_1) {
                product_view_component_1 = product_view_component_1_1;
            },
            function (cart_view_component_1_1) {
                cart_view_component_1 = cart_view_component_1_1;
            },
            function (checkout_view_component_1_1) {
                checkout_view_component_1 = checkout_view_component_1_1;
            }
        ],
        execute: function () {
            //import { SigninComponent } from './authentication/signin/signin.component';
            //import { SignupComponent } from './authentication/signup/signup.component';
            exports_1("AppRoutes", AppRoutes = [
                { path: "", redirectTo: "welcome", pathMatch: "full" },
                { path: "welcome", component: welcome_component_1.WelcomeComponent },
                { path: 'products', component: product_list_component_1.ProductListComponent },
                { path: 'products/:id', component: product_view_component_1.ProductViewComponent },
                { path: 'cart', component: cart_view_component_1.CartViewComponent },
                { path: 'checkout', component: checkout_view_component_1.CheckoutViewComponent },
            ]);
            //只需要导入一个组件 
        }
    };
});
//# sourceMappingURL=app.routes.js.map