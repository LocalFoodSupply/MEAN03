System.register(["@angular/core", "@angular/router", "@angular/http", "../category/category.service"], function (exports_1, context_1) {
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
    var core_1, router_1, http_1, category_service_1, productaddcomponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            }
        ],
        execute: function () {
            productaddcomponent = (function () {
                function productaddcomponent(http, _router, categoryService) {
                    this.http = http;
                    this._router = _router;
                    this.categoryService = categoryService;
                    this.product = {};
                }
                productaddcomponent.prototype.productadd = function (product) {
                    var _this = this;
                    var body = JSON.stringify(product);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.post('http://localhost:3000/api/product', body, options)
                        .map(function (res) { return _this.product = res.json(); })
                        .subscribe(function (result) { return _this._router.navigate(['/']); }, function (error) { return _this.errorMessage = error; });
                };
                productaddcomponent.prototype.ngOnInit = function () {
                    this.categories = this.categoryService.getCategories();
                };
                return productaddcomponent;
            }());
            productaddcomponent = __decorate([
                core_1.Component({
                    selector: 'productadd',
                    templateUrl: './app/product/product-add.component.html'
                }),
                __metadata("design:paramtypes", [http_1.Http,
                    router_1.Router, category_service_1.CategoryService])
            ], productaddcomponent);
            exports_1("productaddcomponent", productaddcomponent);
        }
    };
});
//# sourceMappingURL=product-add.component.js.map