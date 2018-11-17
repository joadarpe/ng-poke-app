import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar-search',
  templateUrl: './top-nav-bar-search.component.html',
  styleUrls: ['./top-nav-bar-search.component.css']
})
export class TopNavBarSearchComponent implements OnInit {

  @Output() searchEmitter: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  callSearch(value: string) {
    this.searchEmitter.emit(value)
  }

}
