/*
 * Angular Imports
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';

/*
 * Components
 */
import {Product} from './product.service';

@Component({
    selector: 'db-product-search',
    templateUrl: './app/product/product-search.component.html'
})
export class ProductSearchComponent {
    disabled: boolean = true;
    constructor(private router: Router) {}

    searchProduct(value: string) {
        this.router.navigate(['/products'], { queryParams: { search: value} });
    };
    searchenter(event:any,value:string){if(event.keyCode==13){this.searchProduct(value)}};
    searchChanged(value: string) {
        // Update the disabled property depends on value
        if (value) {
            this.disabled = false;
        } else {
            this.disabled = true;
        }
    }
}
//我们不能CartItem在将产品添加到购物车之前显示信息。
// 为了解决这个问题，我们介绍了getter方法count和amount属性：
