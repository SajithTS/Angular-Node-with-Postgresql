import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Registration } from '../models/login.class';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    username : [''],
    firstName : [''],
    mobile : [''],
    password : [''],
    confirmPassword : ['']
  });
  constructor(private fb:FormBuilder,private authSer:AuthService) { }

  ngOnInit() {
  }

  Register(){
    console.log(this.registerForm.value);
    let register = new Registration();
    register.username = this.registerForm.value.username;
    register.firstName = this.registerForm.value.firstName;
    register.mobile = this.registerForm.value.mobile;
    register.password = this.registerForm.value.password;
    this.authSer.registerService(register).subscribe(res => console.log(res));

  }

}
