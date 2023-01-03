import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
<<<<<<< HEAD
    path:'',
    component:RegisterComponent
  }
]
=======
    path: '',
    component: RegisterComponent
  }
];
>>>>>>> 5a280651138615bbb2317091b63d7760a428f063

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RegisterModule { }
