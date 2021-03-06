System.register([], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var ProductService, ProductNotFoundException;
    return {
        setters: [],
        execute: function () {
            ProductService = (function () {
                function ProductService() {
                    this.products = [
                        // Bakery
                        { id: '1', categoryId: '1', title: 'Baguette/French Bread', price: 1.5, isSpecial: false, imageL: "/img/1.jpg", imageS: "/img/1.jpg", desc: 'Great eaten fresh from oven. Used to make sub sandwiches, etc.' },
                        { id: '2', categoryId: '1', title: 'Croissants', price: 0.5, isSpecial: true, imageL: "/img/2.jpg", imageS: "/img/2.jpg", desc: 'A croissant is a buttery, flaky, viennoiserie-pastry named for its well-known crescent shape.' },
                        // Takeaway
                        { id: '3', categoryId: '2', title: 'Pizza', price: 1.2, isSpecial: false, imageL: "/img/3.jpg", imageS: "/img/3.jpg", desc: 'Pizza is a flatbread generally topped with tomato sauce and cheese and baked in an oven.' },
                        // Dairy
                        { id: '4', categoryId: '3', title: 'Milk', price: 1.7, isSpecial: false, imageL: "/img/4.jpg", imageS: "/img/4.jpg", desc: 'Milk is a pale liquid produced by the mammary glands of mammals' },
                        { id: '5', categoryId: '3', title: 'Cream Cheese', price: 2.35, isSpecial: false, imageL: "/img/5.jpg", imageS: "/img/5.jpg", desc: 'Cream cheese is a soft, mild-tasting fresh cheese with a high fat content.' },
                        // Meat
                        { id: '6', categoryId: '4', title: 'Pork Tenderloin', price: 5.60, isSpecial: false, imageL: "/img/6.jpg", imageS: "/img/6.jpg", desc: 'The pork tenderloin, in some countries called pork fillet, is a cut of pork. ' },
                        { id: '7', categoryId: '4', title: 'Ribs, Baby Back', price: 4.85, isSpecial: false, imageL: "/img/7.jpg", imageS: "/img/7.jpg", desc: 'Pork ribs are a cut of pork popular in North American and Asian cuisines. ' },
                        { id: '8', categoryId: '4', title: 'Ground Beef', price: 9.20, isSpecial: false, imageL: "/img/8.jpg", imageS: "/img/8.jpg", desc: 'Ground beef, beef mince, minced beef, minced meat is a ground meat made of beef that has been finely chopped with a large knife or a meat grinder.' },
                        // Seafood
                        { id: '9', categoryId: '5', title: 'Tuna', price: 3.45, isSpecial: false, imageL: "/img/9.jpg", imageS: "/img/9.jpg", desc: 'A tuna is a saltwater finfish that belongs to the tribe Thunnini, a sub-grouping of the mackerel family – which together with the tunas, also includes the bonitos, ackerels, and Spanish mackerels.' },
                        { id: '10', categoryId: '5', title: 'Salmon', price: 4.55, isSpecial: false, imageL: "/img/10.jpg", imageS: "/img/10.jpg", desc: 'Salmon is the common name for several species of ray-finned fish in the family Salmonidae.' },
                        { id: '11', categoryId: '5', title: 'Oysters', price: 7.80, isSpecial: false, imageL: "/img/11.jpg", imageS: "/img/11.jpg", desc: 'The word oyster is used as a common name for a number of different families of saltwater clams, bivalve molluscs that live in marine or brackish habitats.' },
                        { id: '12', categoryId: '5', title: 'Scalops', price: 2.70, isSpecial: false, imageL: "/img/12.jpg", imageS: "/img/12.jpg", desc: 'Scallop is a common name that is primarily applied to any one of numerous species of saltwater clams or marine bivalve mollusks in the taxonomic family Pectinidae, the scallops.' },
                        // Fruit & Veg
                        { id: '13', categoryId: '6', title: 'Banana', price: 1.55, isSpecial: false, imageL: "/img/13.jpg", imageS: "/img/13.jpg", desc: 'The banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa.' },
                        { id: '14', categoryId: '6', title: 'Cucumber', price: 1.05, isSpecial: false, imageL: "/img/14.jpg", imageS: "/img/14.jpg", desc: 'Cucumber is a widely cultivated plant in the gourd family, Cucurbitaceae. ' },
                        { id: '15', categoryId: '6', title: 'Apple', price: 0.80, isSpecial: false, imageL: "/img/15.jpg", imageS: "/img/15.jpg", desc: 'The apple tree is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple.' },
                        { id: '16', categoryId: '6', title: 'Lemon', price: 3.20, isSpecial: false, imageL: "/img/16.jpg", imageS: "/img/16.jpg", desc: 'The lemon is a species of small evergreen tree native to Asia.' },
                        { id: '17', categoryId: '6', title: 'Pear', price: 4.25, isSpecial: false, imageL: "/img/17.jpg", imageS: "/img/17.jpg", desc: 'The pear is any of several tree and shrub species of genus Pyrus, in the family Rosaceae.' }
                    ];
                }
                ProductService.prototype.getProducts = function (category, search) {
                    if (category) {
                        return this.products.filter(function (product, index, array) {
                            return product.categoryId === category;
                        });
                    }
                    else if (search) {
                        var lowSearch_1 = search.toLowerCase();
                        return this.products.filter(function (produc, index, array) {
                            return produc.title.toLowerCase().indexOf(lowSearch_1) != -1;
                        });
                        //product在这里只是一个变量的替代而已
                    }
                    else {
                        return this.products;
                    }
                };
                ProductService.prototype.getProduct = function (id) {
                    for (var i = 0; i < this.products.length; i++) {
                        if (this.products[i].id === id) {
                            return this.products[i];
                        }
                    }
                    throw new ProductNotFoundException("Product " + id + " not found");
                };
                return ProductService;
            }());
            exports_1("ProductService", ProductService);
            ProductNotFoundException = (function (_super) {
                __extends(ProductNotFoundException, _super);
                function ProductNotFoundException(message) {
                    return _super.call(this, message) || this;
                }
                return ProductNotFoundException;
            }(Error));
            exports_1("ProductNotFoundException", ProductNotFoundException);
        }
    };
});
//# sourceMappingURL=product.service.js.map