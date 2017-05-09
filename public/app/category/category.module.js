System.register(["@angular/core", "@angular/common", "@angular/forms", "@angular/router", "./category-list.component", "./category.pipe", "./category-card.component", "./category-slide.component", "./category.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, forms_1, router_1, category_list_component_1, category_pipe_1, category_card_component_1, category_slide_component_1, category_service_1, CategoryModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (category_list_component_1_1) {
                category_list_component_1 = category_list_component_1_1;
            },
            function (category_pipe_1_1) {
                category_pipe_1 = category_pipe_1_1;
            },
            function (category_card_component_1_1) {
                category_card_component_1 = category_card_component_1_1;
            },
            function (category_slide_component_1_1) {
                category_slide_component_1 = category_slide_component_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            }
        ],
        execute: function () {
            CategoryModule = (function () {
                function CategoryModule() {
                }
                return CategoryModule;
            }());
            CategoryModule = __decorate([
                core_1.NgModule({
                    imports: [common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule],
                    declarations: [category_list_component_1.CategoryListComponent, category_pipe_1.CategoryTitlePipe, category_card_component_1.CategoryCardComponent, category_slide_component_1.CategorySlideComponent],
                    exports: [category_list_component_1.CategoryListComponent, category_pipe_1.CategoryTitlePipe, category_card_component_1.CategoryCardComponent, category_slide_component_1.CategorySlideComponent],
                    providers: [category_service_1.CategoryService]
                })
            ], CategoryModule);
            exports_1("CategoryModule", CategoryModule);
        }
    };
});
//# sourceMappingURL=category.module.js.map