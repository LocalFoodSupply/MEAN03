System.register(["@angular/core", "@angular/forms"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    function validateZip(c) {
        var ZIP_REGEXP = new RegExp('[A-Za-z]{5}');
        return ZIP_REGEXP.test(c.value) ? null : {
            validateZip: {
                valid: false
            }
        };
    }
    exports_1("validateZip", validateZip);
    var core_1, forms_1, ZipValidator, ZipValidator_1;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }
        ],
        execute: function () {
            ZipValidator = ZipValidator_1 = (function () {
                function ZipValidator() {
                    this.validator = validateZip;
                }
                ZipValidator.prototype.validate = function (c) {
                    return this.validator(c);
                };
                return ZipValidator;
            }());
            ZipValidator = ZipValidator_1 = __decorate([
                core_1.Directive({
                    selector: '[validateZip][ngModel],[validateZip][formControl]',
                    providers: [
                        { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return ZipValidator_1; }), multi: true }
                    ]
                })
            ], ZipValidator);
            exports_1("ZipValidator", ZipValidator);
            //指令就是一个类 然后可以返回值 所以可以用【】进行数据绑定 如 ngModel指令完成dom绑定到value并返回value
            //验证器只提供返回值，由formbuilder.group指令来对返回值进行读取，然后对form进行valid与否的设置
            //Angular 2 通过引入 forwardRef 让我们可以在使用构造注入时，使用尚未定义的依赖对象类型。
            //*NgIf 实际是模板上的[NgIf]  [NgSwitch]+*NgSwitchWhen  [NgClass]
            //*NgFor=“let product.server.controller.js of products”  microsyntax 使用微函数式创建product变量传递给模板，加上
            // ; trackBy：product.server.controller.js.id;避免DOM重建
            //指令对DOM元素或者布局进行更改----------------指令是具有指定@Directive装饰器的类。
        }
    };
});
//# sourceMappingURL=zip.validator.js.map