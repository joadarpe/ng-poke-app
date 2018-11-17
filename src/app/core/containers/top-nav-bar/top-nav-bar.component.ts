import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  @Output() searchEmitter: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit() {
    $("a.toggle-sidebar").click(function () {
      event.preventDefault()
      $(".left-aside").toggleClass("closed")
      $(".left-aside").toggleClass("col-2")
      $(".main-section").toggleClass("col-10")
      $(".main-section").toggleClass("col-11")
    })
  }

  callSearch(value: string) {
    this.searchEmitter.emit(value)
  }

}
