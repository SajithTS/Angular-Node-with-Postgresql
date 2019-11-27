import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedComponent } from './unauthorized.component';
import { RouterModule } from '@angular/router';
import { unauthorizedRoute } from './unauthorized.routing';



@NgModule({
  declarations: [UnauthorizedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(unauthorizedRoute)
  ]
})
export class UnauthorizedModule { }
