System.register(["@angular/core", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, router_1, ProductSearchComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            ProductSearchComponent = (function () {
                function ProductSearchComponent(router) {
                    this.router = router;
                    this.disabled = true;
                }
                ProductSearchComponent.prototype.searchProduct = function (value) {
                    this.router.navigate(['/products'], { queryParams: { search: value } });
                };
                ;
                ProductSearchComponent.prototype.searchenter = function (event, value) { if (event.keyCode == 13) {
                    this.searchProduct(value);
                } };
                ;
                ProductSearchComponent.prototype.searchChanged = function (value) {
                    // Update the disabled property depends on value
                    if (value) {
                        this.disabled = false;
                    }
                    else {
                        this.disabled = true;
                    }
                };
                return ProductSearchComponent;
            }());
            ProductSearchComponent = __decorate([
                core_1.Component({
                    selector: 'db-product-search',
                    templateUrl: './app/product/product-search.component.html'
                }),
                __metadata("design:paramtypes", [router_1.Router])
            ], ProductSearchComponent);
            exports_1("ProductSearchComponent", ProductSearchComponent);
            //我们不能CartItem在将产品添加到购物车之前显示信息。
            // 为了解决这个问题，我们介绍了getter方法count和amount属性：
        }
    };
});
//# sourceMappingURL=product-search.component.js.map