import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { registerRoute } from './register.routing';
import { MatCardModule, MatButtonModule, MatInputModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(registerRoute),
    MatCardModule, MatButtonModule, MatInputModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
