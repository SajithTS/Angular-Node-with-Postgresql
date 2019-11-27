import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home.component';
import { RouterModule } from '@angular/router';
import { userRoute } from './user-home.routing';



@NgModule({
  declarations: [UserHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoute)
  ]
})
export class UserHomeModule { }
