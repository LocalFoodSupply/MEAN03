import { Http,Response } from '@angular/http';
import {Injectable} from "@angular/core";



@Injectable()
export class ProductService {
    products:Product[];
    product:Product;

    constructor(private _http:Http) { }

    getProducts(filter?) {
    let url = 'http://localhost:3000/api/products';
    //如果有filter，就把url換掉
    if (filter) {
      url = 'http://localhost:3000/api/products/'+filter;
    }

    // products是obs，所以template那邊要用async
    return this._http.get(url)
      .map(res => res.json().products).subscribe(products=>this.products=products)
  }


    getProduct(id) {
        let urll='http://localhost:3000/api/product';
        this._http.get(`${urll}/${id}`)
        .map((res) => res.json().product)
       .subscribe(product => {
        this.product = product;
      });
    }



}


export interface Product {
    category: string;
    // The title
    title: string;
    // Price
    price: number;
    // MArk product.server.controller.js with specialproce
    isSpecial: boolean;
    // Description
    desc: string;
    // Path to small image
    imageS: string;
    // Path to large image
    imageL: string;
    prod:string;
}
