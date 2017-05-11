System.register(["@angular/http", "@angular/core"], function (exports_1, context_1) {
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
    var http_1, core_1, ProductService;
    return {
        setters: [
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ProductService = (function () {
                function ProductService(_http) {
                    this._http = _http;
                }
                ProductService.prototype.getProducts = function (category, search) {
                    var url = 'http://localhost:3000/api/products';
                    //如果有filter，就把url換掉
                    if (category) {
                        url = 'http://localhost:3000/api/products/category/' + category;
                    }
                    else if (search) {
                        url = 'http://localhost:3000/api/products/search/' + search;
                    }
                    // products是obs，所以template那邊要用async
                    return this._http.get(url)
                        .map(function (res) { return res.json().products; });
                };
                ProductService.prototype.getProduct = function (id) {
                    var urll = 'http://localhost:3000/api/product';
                    return this._http.get(urll + "/" + id)
                        .map(function (res) { return res.json().product; });
                };
                return ProductService;
            }());
            ProductService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], ProductService);
            exports_1("ProductService", ProductService);
        }
    };
});
//# sourceMappingURL=product.service.js.map