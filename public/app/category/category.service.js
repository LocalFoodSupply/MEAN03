System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, Category, CategoryService, CategoryNotFoundException;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            Category = (function () {
                function Category() {
                }
                return Category;
            }());
            exports_1("Category", Category);
            CategoryService = (function () {
                function CategoryService() {
                    this.categories = [
                        { id: '1', title: 'Bread & Bakery', imageL: "/img/5.jpg", imageS: "/img/5.jpg", desc: 'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee and more.' },
                        { id: '2', title: 'Takeaway', imageL: "/img/6.jpg", imageS: "/img/6.jpg", desc: 'It\'s consistently excellent, dishes are superb and healthily cooked with high quality ingredients.' },
                        { id: '3', title: 'Dairy', imageL: "/img/7.jpg", imageS: "/img/7.jpg", desc: 'A dairy product is food produced from the milk of mammals, primarily cows, water buffaloes, goats, sheep, yaks.' },
                        { id: '4', title: 'Meat', imageL: "/img/8.jpg", imageS: "/img/8.jpg", desc: 'Only superior quality beef, lamb, pork.' },
                        { id: '5', title: 'Seafood', imageL: "/img/9.jpg", imageS: "/img/9.jpg", desc: 'Great place to buy fresh seafood.' },
                        { id: '6', title: 'Fruit & Veg', imageL: "/img/10.jpg", imageS: "/img/10.jpg", desc: 'A variety of fresh fruits and vegetables.' }
                    ];
                }
                CategoryService.prototype.getCategories = function () {
                    return this.categories;
                };
                CategoryService.prototype.getCategory = function (id) {
                    for (var i = 0; i < this.categories.length; i++) {
                        if (this.categories[i].id === id) {
                            return this.categories[i];
                        }
                    }
                    throw new CategoryNotFoundException("Category " + id + " not found");
                };
                return CategoryService;
            }());
            CategoryService = __decorate([
                core_1.Injectable()
            ], CategoryService);
            exports_1("CategoryService", CategoryService);
            CategoryNotFoundException = (function (_super) {
                __extends(CategoryNotFoundException, _super);
                function CategoryNotFoundException(message) {
                    return _super.call(this, message) || this;
                }
                return CategoryNotFoundException;
            }(Error));
            exports_1("CategoryNotFoundException", CategoryNotFoundException);
        }
    };
});
//# sourceMappingURL=category.service.js.map