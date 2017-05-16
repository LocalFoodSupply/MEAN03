import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { UserService } from '../services/user.service';
import { ThreadService } from '../services/thread.service';
import { User } from '../datatypes/user';

@Component({
    selector: 'user-list',
    templateUrl:'./app/chat/user/user-list.component.html',
})
export class UserListComponent {
  public users: Array<User>;
  public filteredUsers: Array<User>;
  public selected: boolean = false;
  public search: Subject<String> = new ReplaySubject(1);
  public searchValue: string = '';
  private _threadService: ThreadService;
  private _userService: UserService;
  private _router: Router;

  constructor(userService: UserService, threadService: ThreadService, router: Router) {
    this._userService = userService;
    this._threadService = threadService;
    this._router = router;
    this._userService.users.subscribe(users => {
      this.filteredUsers = this.users = users;
    });
    this.search
      .debounceTime(200)
      .distinctUntilChanged()
      .subscribe((value: string) => {
        this.filteredUsers = this.users.filter(user => {
          return user.username.toLowerCase().startsWith(value);
        });
      });
  }

  onInput(event) {
    this.search.next(event.target.value);
  }

  onFocus() {
    this.selected = true;
  }

  onClose(event) {
    this.cleanUp();
    event.preventDefault();
  }

  onEsc(event) {
    this.cleanUp();
    let target: HTMLElement = <HTMLElement>event.target;
    target.blur();
    event.preventDefault();
  }

  openThread(event, user: User) {
    this._threadService.open({ userId: user._id }).subscribe(thread => {
      //this._threadService.storeThread(thread);
      this._router.navigate(['/messages', thread._id]);
      this.cleanUp();
    });
  }

  cleanUp() {
    this.searchValue = '';
    this.selected = false;
    this.search.next('');
  }
}
