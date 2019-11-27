import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'login',loadChildren:() => import('./login/login.module').then(m => m.LoginModule)},
  {path:'home',loadChildren:() => import('./user-home/user-home.module').then(m => m.UserHomeModule)/*,canActivate:[AuthGuard]*/},
  {path:'register',loadChildren:() => import('./register/register.module').then(m => m.RegisterModule)},
  {path:'unauthorized',loadChildren:() => import('./unauthorized/unauthorized.module').then(m => m.UnauthorizedModule)},
  {path:'notfound',loadChildren:() => import('./notfound/notfound.module').then(m => m.NotfoundModule)},
  {path:'**',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
