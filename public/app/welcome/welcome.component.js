System.register(["@angular/core", "../category/category.service"], function (exports_1, context_1) {
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
    var core_1, category_service_1, WelcomeComponent;
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
            WelcomeComponent = (function () {
                function WelcomeComponent(categoryServics) {
                    this.categoryServics = categoryServics;
                    this.slideCategories = [
                        this.categoryServics.getCategory('1'),
                        this.categoryServics.getCategory('2'),
                        this.categoryServics.getCategory('3')
                    ];
                    this.cardCategories = this.categoryServics.getCategories();
                }
                WelcomeComponent.prototype.selectCategory = function (category) {
                    console.log('Selected category', category.title);
                };
                return WelcomeComponent;
            }());
            WelcomeComponent = __decorate([
                core_1.Component({
                    selector: 'db-welcome',
                    templateUrl: './app/welcome/welcome.component.html'
                }),
                __metadata("design:paramtypes", [category_service_1.CategoryService])
            ], WelcomeComponent);
            exports_1("WelcomeComponent", WelcomeComponent);
        }
    };
});
//# sourceMappingURL=welcome.component.js.map