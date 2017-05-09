System.register(["@angular/core", "./category.service"], function (exports_1, context_1) {
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
    var core_1, category_service_1, CategoryTitlePipe;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            }
        ],
        execute: function () {
            CategoryTitlePipe = (function () {
                function CategoryTitlePipe(categoryService) {
                    this.categoryService = categoryService;
                }
                CategoryTitlePipe.prototype.transform = function (value) {
                    var category = this.categoryService.getCategory(value);
                    return category ? category.title : '';
                };
                return CategoryTitlePipe;
            }());
            CategoryTitlePipe = __decorate([
                core_1.Pipe({ name: 'categoryTitle' }),
                __metadata("design:paramtypes", [category_service_1.CategoryService])
            ], CategoryTitlePipe);
            exports_1("CategoryTitlePipe", CategoryTitlePipe);
        }
    };
});
//# sourceMappingURL=category.pipe.js.map