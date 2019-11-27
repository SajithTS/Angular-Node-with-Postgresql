import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html'
})
export class UserHomeComponent implements OnInit {

  userInfo:any;
  constructor(private authSer:AuthService) { }

  ngOnInit() {
    this.GetUserData();
  }

  GetUserData(){
    this.authSer.getUserDetails().subscribe(res => {
      this.userInfo = res;
      console.log(this.userInfo);
    },
    (error) => {
      console.log(error)
    });
  }

}
