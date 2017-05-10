import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from "rxjs/Observable";

export interface Category {
    //  Unique Id
    id: string;
    // The title
    title: string;
    // Description
    desc: string;
    // Path to small image
    imageS: string;
    // Path to large image
    imageL: string;
}


@Injectable()
export class CategoryService {
    categories:Category[];
    constructor(private _http:Http) { };
    getCategories(): Observable<Category[]> {
    let urls = 'http://localhost:3000/api/category/list'
    return this._http.get(urls)
        .map(res => res.json().categories)}

    getCategory(id: string): Category {
            for (let i = 0; i < this.categories.length; i++) {
                if (this.categories[i].id === id) {
                    return this.categories[i];
                }
            }
            return null;
        }

    }


