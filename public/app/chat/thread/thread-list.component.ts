import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ThreadService } from '../services/thread.service';
import { Thread } from '../datatypes/thread';
import { ThreadComponent } from './thread.component';

@Component({
    selector: 'thread-list',
    // changeDetection: ChangeDetectionStrategy.OnPushObserve,
    // changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
      <h4>Recent <span class="muted">({{threads.length}})</span></h4>
      <thread
        *ngFor=" let thread of threads"
        [thread]="thread">
      </thread>
    `
})
export class ThreadListComponent {
  public threads: Array<Thread> = [];
  private _threadService: ThreadService;

  constructor(threadService: ThreadService) {
    this._threadService = threadService;
    this._threadService.threads.subscribe(threads => {
      this.threads = threads;
    });
    this._threadService.getAll();
  }
}
