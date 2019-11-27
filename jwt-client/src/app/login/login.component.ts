import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Login, LoginResponse } from '../models/login.class';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import * as moment from 'moment'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username : [''],
    password : ['']
  });
  constructor(private fb:FormBuilder,private authSer:AuthService,private router:Router) { }

  ngOnInit() {
  }

  Login(){
    let login = new Login();
    login.username = this.loginForm.value.username;
    login.password = this.loginForm.value.password;
    console.log(this.loginForm.value);
    this.authSer.loginService(login).subscribe((res:LoginResponse) => {
      console.log(res);
      if(res.status == 200){
        localStorage.setItem('id_token',res.token);
        const expiresAt = moment().add(res.expiresIn,'seconds');
        console.log(expiresAt.valueOf());
        localStorage.setItem('expires_At',JSON.stringify(expiresAt.valueOf()));
        this.router.navigate(['/home']);
      }
      else{
        
      }
    },
    (error) => {
      console.log(error);
    });
  }

}
