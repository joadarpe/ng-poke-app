import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css'],
  animations: [
    trigger('asideAnimation', [
      state('close', style({ width: '50px' })),
      state('open', style({ width: '100%' })),
      transition('open => close', animate('500ms ease-out')),
      transition('close => open', animate('500ms ease-in'))
    ])
  ]
})
export class CoreComponent implements OnInit {

  asideState: string = 'open'

  searchFilter: string

  constructor() { }

  ngOnInit() {
  }

  callSearch(value: string) {
    this.searchFilter = value
  }

  changeState(value: string) {
    this.asideState = value
  }

}
