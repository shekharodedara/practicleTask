import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import {MatTabsModule} from '@angular/material/tabs';
=======
import { MatTabsModule } from '@angular/material/tabs';
>>>>>>> 5a280651138615bbb2317091b63d7760a428f063
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

const routes: Routes = [
  {
<<<<<<< HEAD
    path:'',
    component:HomeComponent
=======
    path: '',
    component: HomeComponent
>>>>>>> 5a280651138615bbb2317091b63d7760a428f063
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
