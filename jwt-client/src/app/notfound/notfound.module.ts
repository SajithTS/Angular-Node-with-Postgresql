import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound.component';
import { RouterModule } from '@angular/router';
import { notFoundRoute } from './notfound.routing';



@NgModule({
  declarations: [NotfoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(notFoundRoute)
  ]
})
export class NotfoundModule { }
