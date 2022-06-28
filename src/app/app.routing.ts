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
import { ThuVienComponent } from './components/home/thu-vien/thu-vien.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { AuthGuardGuard } from './services/auth-guard.guard';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  
  { path: 'login',
   component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'home-detail/:id',
        component: HomeDetailComponent,
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'them-san-pham',
        component: HomeAddComponent,
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'home-edit/:id',
        component: HomeEditComponent,
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'reactive-form',
        component: ReactiveFormComponent,
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'template-driven-form',
        component: TemplateDrivenFormComponent,
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'reactive-form-hai',
        component: ReactiveFormHaiComponent,
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'tempalte-driven-form-hai',
        component: TemplateDrivenFormHaiComponent,
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'test-component',
        component: ArrayComponent,
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'object',
        component: ObjectComponent,
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'chart',
        component: ChartComponent,
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'thu-vien',
        component: ThuVienComponent,
        canActivate: [AuthGuardGuard]
      },
    ]
  }
 
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
