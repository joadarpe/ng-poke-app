import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from "@ngrx/store";
import * as fromRoot from "../../../reducers";
import * as fromLayout from "../../actions/layout";
import { Observable } from "rxjs";

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  @Output() searchEmitter: EventEmitter<string> = new EventEmitter()

  isOpen: boolean;

  stateAside$: Observable<string> = this.store.pipe(select(fromRoot.getShowSideNav))

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.stateAside$.subscribe(s => this.isOpen = s == 'open')
  }

  callSearch(value: string) {
    this.searchEmitter.emit(value)
  }

  toggleMenu() {
    if (this.isOpen)
      this.store.dispatch(new fromLayout.CloseSideNav())
    else
      this.store.dispatch(new fromLayout.OpenSideNav())
  }

}
