System.register(["@angular/core", "@angular/router", "./product.service", "../cart/cart.service"], function (exports_1, context_1) {
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
    var core_1, router_1, product_service_1, cart_service_1, ProductGridComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            }
        ],
        execute: function () {
            ProductGridComponent = (function () {
                function ProductGridComponent(router, productService, cartService) {
                    var _this = this;
                    this.router = router;
                    this.productService = productService;
                    this.cartService = cartService;
                    this.products = [];
                    this.router
                        .queryParams
                        .subscribe(function (params) {
                        var category = params['category'];
                        var search = params['search'];
                        // Return filtered data from getProducts function
                        var products = _this.productService.getProducts(category, search);
                        // Transform products to appropriate data
                        // to display
                        _this.products = _this.transform(products);
                    });
                }
                ProductGridComponent.prototype.transform = function (source) {
                    var index = 0;
                    var length = source.length;
                    var products = [];
                    while (length) {
                        var row = [];
                        if (length >= 3) {
                            for (var i = 0; i < 3; i++) {
                                row.push(source[index++]);
                            }
                            products.push(row);
                            length -= 3;
                        }
                        else {
                            for (; length > 0; length--) {
                                row.push(source[index++]);
                            }
                            products.push(row);
                        }
                    }
                    return products;
                };
                ProductGridComponent.prototype.addToCart = function (product) {
                    this.cartService.addProduct(product);
                };
                return ProductGridComponent;
            }());
            ProductGridComponent = __decorate([
                core_1.Component({
                    selector: 'db-product-grid',
                    templateUrl: './app/product/product-grid.component.html'
                }),
                __metadata("design:paramtypes", [router_1.ActivatedRoute, product_service_1.ProductService, cart_service_1.CartService])
            ], ProductGridComponent);
            exports_1("ProductGridComponent", ProductGridComponent);
        }
    };
});
//# sourceMappingURL=product-grid.component.js.map