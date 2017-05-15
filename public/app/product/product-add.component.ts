import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Category, CategoryService} from '../category/category.service';


@Component({
    selector: 'productadd',
    templateUrl: './app/product/product-add.component.html'
})
export class productaddcomponent implements  OnInit{
    errorMessage: string;
    product: any = {};
    categories: Observable<Category[]>;
    constructor (private http: Http,
                 private _router: Router,private categoryService: CategoryService) {}


    productadd(product: any) {
        let body = JSON.stringify(product);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.post('http://localhost:3000/api/product', body, options)
            .map(res => this.product = res.json())
            .subscribe(result  => this._router.navigate(['/']),
            error =>  this.errorMessage = error);
    }
    ngOnInit(): void {
        this.categories = this.categoryService.getCategories();
    }
}


