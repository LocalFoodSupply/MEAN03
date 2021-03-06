System.register(["@angular/core", "@angular/common", "@angular/forms", "@angular/router", "./product-list.component", "./product-view.component", "./product-card.component", "./product-search.component", "./product-grid.component", "./product.service", "../category/category.module"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, forms_1, router_1, product_list_component_1, product_view_component_1, product_card_component_1, product_search_component_1, product_grid_component_1, product_service_1, category_module_1, ProductModule;
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
            function (product_list_component_1_1) {
                product_list_component_1 = product_list_component_1_1;
            },
            function (product_view_component_1_1) {
                product_view_component_1 = product_view_component_1_1;
            },
            function (product_card_component_1_1) {
                product_card_component_1 = product_card_component_1_1;
            },
            function (product_search_component_1_1) {
                product_search_component_1 = product_search_component_1_1;
            },
            function (product_grid_component_1_1) {
                product_grid_component_1 = product_grid_component_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (category_module_1_1) {
                category_module_1 = category_module_1_1;
            }
        ],
        execute: function () {
            ProductModule = (function () {
                function ProductModule() {
                }
                return ProductModule;
            }());
            ProductModule = __decorate([
                core_1.NgModule({
                    imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule, category_module_1.CategoryModule],
                    declarations: [product_list_component_1.ProductListComponent, product_view_component_1.ProductViewComponent, product_card_component_1.ProductCardComponent, product_search_component_1.ProductSearchComponent, product_grid_component_1.ProductGridComponent],
                    exports: [product_list_component_1.ProductListComponent, product_view_component_1.ProductViewComponent, product_card_component_1.ProductCardComponent, product_search_component_1.ProductSearchComponent, product_grid_component_1.ProductGridComponent],
                    providers: [product_service_1.ProductService]
                })
            ], ProductModule);
            exports_1("ProductModule", ProductModule);
        }
    };
});
//# sourceMappingURL=product.module.js.map