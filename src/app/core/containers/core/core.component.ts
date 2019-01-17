import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Store, select } from '@ngrx/store';
import * as fromRoot from "../../../reducers";
import { Observable } from "rxjs";

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css'],
  animations: [
    trigger('asideAnimation', [
      state('close', style({ width: '50px' })),
      state('open', style({ width: '200px' })),
      transition('open => close', animate('500ms ease-out')),
      transition('close => open', animate('500ms ease-in'))
    ])
  ]
})
export class CoreComponent implements OnInit {

  searchFilter: string
  asideState: string

  stateAside$: Observable<string> = this.store.pipe(select(fromRoot.getShowSideNav))

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.stateAside$.subscribe(s => this.asideState = s)
  }

  callSearch(value: string) {
    this.searchFilter = value
  }

}
