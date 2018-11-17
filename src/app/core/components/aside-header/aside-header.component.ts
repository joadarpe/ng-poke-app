import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aside-header',
  templateUrl: './aside-header.component.html',
  styleUrls: ['./aside-header.component.css']
})
export class AsideHeaderComponent implements OnInit {

  @Input() user

  constructor() { }

  ngOnInit() {
  }

}
