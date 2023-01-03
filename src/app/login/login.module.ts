<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes =[
  {
    path: '',
    component:LoginComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleDialog, LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    ExampleDialog
>>>>>>> 5a280651138615bbb2317091b63d7760a428f063
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
<<<<<<< HEAD
=======
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
>>>>>>> 5a280651138615bbb2317091b63d7760a428f063
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
