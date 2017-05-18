import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { contentHeaders } from '../common/headers';
import { User } from '../datatypes/user';
import {AuthenticationService} from '../../authentication/authentication.service';
import {Router} from '@angular/router';

type ObservableUsers = Observable<Array<User>>;

@Injectable()
export class UserService {
  public users: ObservableUsers;
  public user: User;
  private _http: Http;
  private _userObservers: any;
  private _dataStore: { users: Array<User> };

  constructor(http: Http,private _router:Router,
				private _authenticationService: AuthenticationService) {
    this._http = http;
    this.users =this._http
          .get('/api/users', { headers: contentHeaders })
          .map((res: Response) => res.json());
        //new Observable(observer => this._userObservers = observer).share();
    this._dataStore = { users: [] };
    //this.getAll();
  }}

  /*getAll() {
    return this._http
    .get('/api/users', { headers: contentHeaders })
    .map((res: Response) => res.json())
    .subscribe(users => this.storeUsers(users));
  }*/

  // findById(id: number) {
  //   return this._http
  //   .get('/api/users/'+id, { headers: contentHeaders })
  //   .map((res: Response) => res.json());
  // }

 /* storeUsers(users: Array<User>) {
    this._dataStore.users = users;
    this._userObservers.next(this._dataStore.users);
  }
}*/
