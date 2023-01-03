<<<<<<< HEAD
import { RegisterModule } from './login/register/register.module';
=======
>>>>>>> 5a280651138615bbb2317091b63d7760a428f063
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:'home', loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)},
  {path:'login', loadChildren: ()=> import('./login/login.module').then(m => m.LoginModule)},
  {path:'register', loadChildren: ()=> import('./login/register/register.module').then(m => m.RegisterModule)}
=======
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./login/register/register.module').then(m => m.RegisterModule) }
>>>>>>> 5a280651138615bbb2317091b63d7760a428f063
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
