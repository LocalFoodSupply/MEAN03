System.register(["@angular/core", "@angular/http", "../common/headers", "../../authentication/authentication.service", "@angular/router"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, headers_1, authentication_service_1, router_1, UserService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (headers_1_1) {
                headers_1 = headers_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            UserService = (function () {
                function UserService(http, _router, _authenticationService) {
                    this._router = _router;
                    this._authenticationService = _authenticationService;
                    this._http = http;
                    this.users = this._http
                        .get('/api/users', { headers: headers_1.contentHeaders })
                        .map(function (res) { return res.json(); });
                    //new Observable(observer => this._userObservers = observer).share();
                    this._dataStore = { users: [] };
                    //this.getAll();
                }
                return UserService;
            }());
            UserService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http, router_1.Router,
                    authentication_service_1.AuthenticationService])
            ], UserService);
            exports_1("UserService", UserService);
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
        }
    };
});
//# sourceMappingURL=user.service.js.map