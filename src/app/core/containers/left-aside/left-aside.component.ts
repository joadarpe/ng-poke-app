import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-aside',
  templateUrl: './left-aside.component.html',
  styleUrls: ['./left-aside.component.css']
})
export class LeftAsideComponent implements OnInit {

  user: {
    name: string,
    email: string,
    picUrl: string
  }

  constructor() {
    this.user = {
      name: 'Jonathan',
      email: 'jonathan@bizagi.com',
      picUrl: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'
    }
  }

  ngOnInit() {
  }

}
