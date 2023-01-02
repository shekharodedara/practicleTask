import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
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
