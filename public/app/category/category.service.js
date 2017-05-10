System.register(["@angular/core", "@angular/http"], function (exports_1, context_1) {
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
    var core_1, http_1, CategoryService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {
            CategoryService = (function () {
                function CategoryService(_http) {
                    this._http = _http;
                }
                ;
                CategoryService.prototype.getCategories = function () {
                    var urls = 'http://localhost:3000/api/category/list';
                    return this._http.get(urls)
                        .map(function (res) { return res.json().categories; });
                };
                CategoryService.prototype.getCategory = function (id) {
                    for (var i = 0; i < this.categories.length; i++) {
                        if (this.categories[i].id === id) {
                            return this.categories[i];
                        }
                    }
                    return null;
                };
                return CategoryService;
            }());
            CategoryService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], CategoryService);
            exports_1("CategoryService", CategoryService);
        }
    };
});
//# sourceMappingURL=category.service.js.map