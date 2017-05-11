import { Http,Response } from '@angular/http';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";


@Injectable()
export class ProductService {
    products:Product[];
    product:Product;

    constructor(private _http:Http) { }

    getProducts(category?,search?):Observable<Product[]>{
    let url = 'http://localhost:3000/api/products';
    //如果有filter，就把url換掉
    if (category) {
      url = 'http://localhost:3000/api/products/category/'+category;
    }
    else if (search) { url = 'http://localhost:3000/api/products/search/'+search;}

    // products是obs，所以template那邊要用async
    return this._http.get(url)
      .map(res => res.json().products)
  }


    getProduct(id:string):Observable<Product>{
        let urll='http://localhost:3000/api/product';
        return this._http.get(`${urll}/${id}`)
        .map((res) => res.json().product);}




}


export interface Product {
    category:any;
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
