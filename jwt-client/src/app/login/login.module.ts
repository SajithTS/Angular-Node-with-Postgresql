import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { loginRoute } from './login.routing';
import { MatCardModule, MatButtonModule, MatInputModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoute),
    MatCardModule,MatButtonModule,MatInputModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
