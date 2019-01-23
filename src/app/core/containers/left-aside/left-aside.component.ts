import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/app';
import { AuthService } from 'src/app/auth/services/auth.service';

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

  constructor(private authService: AuthService) {
    this.user = {
      name: '',
      email: '',
      picUrl: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'
    }
  }

  ngOnInit() {
    this.authService.profileUser().subscribe(u => {
      if (u) {
        console.log(u)
        this.user.name = u.displayName
        this.user.email = u.email
        if (u.photoURL)
          this.user.picUrl = u.photoURL
      }
    });
  }

}
