import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurdComponent } from './curd.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreatComponent } from './creat/creat.component';
import { ViewComponent } from './view/view.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path:"",
    component: CurdComponent,
    data:{ModuleName:'CurdModule'},
    children:[
      {
        path:"",
        redirectTo:"list",
      },
      {
        path:"list",
       component:ListComponent,
      },
      {
        path:"creat",
        component:CreatComponent,
      },
      {
        path:"edit/:id",
        component:CreatComponent,
      },
      {
        path:"view/:id",
        component:ViewComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [CurdComponent, ListComponent, CreatComponent, ViewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CurdModule { }
