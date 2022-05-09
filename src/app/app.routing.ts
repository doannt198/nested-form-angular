import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAddComponent } from './components/home/home-add/home-add.component';
import { HomeDetailComponent } from './components/home/home-detail/home-detail.component';
import { HomeEditComponent } from './components/home/home-edit/home-edit.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormComponent } from './components/home/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './components/home/template-driven-form/template-driven-form.component';
import { TestComponent } from './components/home/test/test.component';
import { Test1Component } from './components/home/test1/test1.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path:'' ,
        loadChildren: ()=>import('../app/pages/home/home.module').then(m=>m.HomeModule)
      },
      {
        path: 'trang-chu',
        loadChildren: ()=> import('../app/pages/trang-chu/trang-chu.module').then(m=>m.TrangChuModule)
      },
      { path:'home-add',
       component:HomeAddComponent
      },
      { 
        path:'home-detail/:id',
       component:HomeDetailComponent
      },
      { 
        path:'home-edit/:id',
       component:HomeEditComponent
      },
      { 
        path:'test',
       component:TestComponent
      },
      { 
        path:'test1',
       component:Test1Component
      },
      { 
        path:'reactive-form',
       component: ReactiveFormComponent
      },
      { 
        path:'template-driven-form',
       component: TemplateDrivenFormComponent
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
