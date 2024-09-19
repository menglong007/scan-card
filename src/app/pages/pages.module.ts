import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MajorComponent} from "./major/major.component";
import {FacultyComponent} from "./faculty/faculty.component";
import {DepartmentComponent} from "./department/department.component";
import {PagesComponent} from "./pages.component";

const routes: Routes = [
  {
    path :'',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'major',
        pathMatch: 'full',
      },

      {
        path: 'major',
        component: MajorComponent,
      },
      {
        path:'factory',
        component: FacultyComponent,
      },
      {
        path:'department',
        component: DepartmentComponent,
      }
    ]
  },

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class PagesModule { }
