System.register(["@angular/core"], function (exports_1, context_1) {
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
    var core_1, CategorySlideComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            CategorySlideComponent = (function () {
                function CategorySlideComponent() {
                    this.select = new core_1.EventEmitter();
                }
                return CategorySlideComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], CategorySlideComponent.prototype, "category", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", core_1.EventEmitter)
            ], CategorySlideComponent.prototype, "select", void 0);
            CategorySlideComponent = __decorate([
                core_1.Component({
                    selector: 'db-category-slide',
                    templateUrl: './app/category/category-slide.component.html'
                })
            ], CategorySlideComponent);
            exports_1("CategorySlideComponent", CategorySlideComponent);
        }
    };
});
//# sourceMappingURL=category-slide.component.js.map