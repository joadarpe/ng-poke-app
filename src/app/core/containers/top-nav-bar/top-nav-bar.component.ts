import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  @Output() searchEmitter: EventEmitter<string> = new EventEmitter()
  @Output() toggleMenuEmitter: EventEmitter<string> = new EventEmitter()

  isOpen: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  callSearch(value: string) {
    this.searchEmitter.emit(value)
  }

  toggleMenu() {
    this.isOpen = !this.isOpen
    this.toggleMenuEmitter.emit(this.isOpen ? 'open' : 'close')
  }

}
