import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayComponent } from './components/home/array/array.component';
import { HomeAddComponent } from './components/home/home-add/home-add.component';
import { HomeDetailComponent } from './components/home/home-detail/home-detail.component';
import { HomeEditComponent } from './components/home/home-edit/home-edit.component';
import { HomeComponent } from './components/home/home.component';
import { ObjectComponent } from './components/home/object/object.component';
import { ReactiveFormHaiComponent } from './components/home/reactive-form-hai/reactive-form-hai.component';
import { ReactiveFormComponent } from './components/home/reactive-form/reactive-form.component';
import { TemplateDrivenFormHaiComponent } from './components/home/template-driven-form-hai/template-driven-form-hai.component';
import { TemplateDrivenFormComponent } from './components/home/template-driven-form/template-driven-form.component';
import { TestComponent } from './components/home/test/test.component';
import { Test1Component } from './components/home/test1/test1.component';
import { MenuComponent } from './components/menu/menu.component';


const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'menu' },
  { path: 'menu', component: MenuComponent },
  {
    path: 'home',
    component: HomeComponent
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
  { 
    path:'reactive-form-hai',
   component: ReactiveFormHaiComponent
  },
  { 
    path:'tempalte-driven-form-hai',
   component: TemplateDrivenFormHaiComponent
  },
  { 
    path:'array',
   component: ArrayComponent
  },
  { 
    path:'object',
   component: ObjectComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
