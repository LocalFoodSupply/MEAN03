System.register(["@angular/core", "@angular/router", "rxjs/ReplaySubject", "../services/user.service", "../services/thread.service"], function (exports_1, context_1) {
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
    var core_1, router_1, ReplaySubject_1, user_service_1, thread_service_1, UserListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ReplaySubject_1_1) {
                ReplaySubject_1 = ReplaySubject_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (thread_service_1_1) {
                thread_service_1 = thread_service_1_1;
            }
        ],
        execute: function () {
            UserListComponent = (function () {
                function UserListComponent(userService, threadService, router, _activatedroute) {
                    this._activatedroute = _activatedroute;
                    this.selected = false;
                    this.search = new ReplaySubject_1.ReplaySubject(1);
                    this.searchValue = '';
                    this._userService = userService;
                    this._threadService = threadService;
                    this._router = router;
                    /*this._userService.users.subscribe(users => {
                      this.filteredUsers = this.users = users;
                    });*/
                    this.filteredUsers = this.users = this._userService.users;
                    /*this.search
                      .debounceTime(200)
                      .distinctUntilChanged()
                      .subscribe((value: string) => {
                        this.filteredUsers = this.users.filter(user => {
                          return user.username.toLowerCase().startsWith(value);
                        });
                      });*/
                }
                UserListComponent.prototype.onInput = function (event) {
                    this.search.next(event.target.value);
                };
                UserListComponent.prototype.onFocus = function () {
                    this.selected = true;
                };
                UserListComponent.prototype.onClose = function (event) {
                    this.cleanUp();
                    event.preventDefault();
                };
                UserListComponent.prototype.onEsc = function (event) {
                    this.cleanUp();
                    var target = event.target;
                    target.blur();
                    event.preventDefault();
                };
                UserListComponent.prototype.openThread = function (event, user) {
                    var _this = this;
                    this._threadService.open({ userId: user._id }).subscribe(function (thread) {
                        //this._threadService.storeThread(thread);
                        _this._router.navigate(['/messages', thread._id]);
                        _this.cleanUp();
                    });
                };
                UserListComponent.prototype.cleanUp = function () {
                    this.searchValue = '';
                    this.selected = false;
                    this.search.next('');
                };
                return UserListComponent;
            }());
            UserListComponent = __decorate([
                core_1.Component({
                    selector: 'user-list',
                    templateUrl: './app/chat/user/user-list.component.html',
                }),
                __metadata("design:paramtypes", [user_service_1.UserService, thread_service_1.ThreadService, router_1.Router,
                    router_1.ActivatedRoute])
            ], UserListComponent);
            exports_1("UserListComponent", UserListComponent);
        }
    };
});
//# sourceMappingURL=user-list.component.js.map