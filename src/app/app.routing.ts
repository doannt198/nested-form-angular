import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayComponent } from './components/home/array/array.component';
import { ChartComponent } from './components/home/chart/chart.component';
import { HomeAddComponent } from './components/home/home-add/home-add.component';
import { HomeDetailComponent } from './components/home/home-detail/home-detail.component';
import { HomeEditComponent } from './components/home/home-edit/home-edit.component';
import { HomeComponent } from './components/home/home.component';
import { ObjectComponent } from './components/home/object/object.component';
import { ReactiveFormHaiComponent } from './components/home/reactive-form-hai/reactive-form-hai.component';
import { ReactiveFormComponent } from './components/home/reactive-form/reactive-form.component';
import { TemplateDrivenFormHaiComponent } from './components/home/template-driven-form-hai/template-driven-form-hai.component';
import { TemplateDrivenFormComponent } from './components/home/template-driven-form/template-driven-form.component';
import { ThuVienAnhComponent } from './components/home/thu-vien-anh/thu-vien-anh.component';
import { MenuComponent } from './components/menu/menu.component';


const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'home-detail/:id',
    component: HomeDetailComponent,
  },
  {
    path: 'them-san-pham',
    component: HomeAddComponent,
  },
  {
    path: 'home-edit/:id',
    component: HomeEditComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
  },
  {
    path: 'template-driven-form',
    component: TemplateDrivenFormComponent,
  },
  {
    path: 'reactive-form-hai',
    component: ReactiveFormHaiComponent,
  },
  {
    path: 'tempalte-driven-form-hai',
    component: TemplateDrivenFormHaiComponent,
  },
  {
    path: 'array',
    component: ArrayComponent,
  },
  {
    path: 'object',
    component: ObjectComponent,
  },
  {
    path: 'chart',
    component: ChartComponent,
  },
  {
    path: 'thu-vien-anh',
    component: ThuVienAnhComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
