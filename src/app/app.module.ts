import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HomeDetailComponent } from './components/home/home-detail/home-detail.component';
import { HomeAddComponent } from './components/home/home-add/home-add.component';
import { HomeEditComponent } from './components/home/home-edit/home-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SwiperModule } from 'swiper/angular';
import { ReactiveFormComponent } from './components/home/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './components/home/template-driven-form/template-driven-form.component';
import { TemplateDrivenFormHaiComponent } from './components/home/template-driven-form-hai/template-driven-form-hai.component';
import { ReactiveFormHaiComponent } from './components/home/reactive-form-hai/reactive-form-hai.component';
import { CalendarModule } from 'primeng/calendar';
import { ArrayComponent } from './components/home/array/array.component';
import { ObjectComponent } from './components/home/object/object.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SidebarModule } from 'primeng/sidebar';
import { MenuComponent } from './components/menu/menu.component';
import { MenuModule } from 'primeng/menu';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputOutputComponent } from './components/home/input-output/input-output.component';
import { AgGridModule } from 'ag-grid-angular';
import { ToastModule } from 'primeng/toast';
import { ChartComponent } from './components/home/chart/chart.component';
import { LoginComponent } from './components/login/login.component';
import { ThuVienAnhComponent } from './components/home/thu-vien-anh/thu-vien-anh.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDetailComponent,
    HomeAddComponent,
    HomeEditComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    TemplateDrivenFormHaiComponent,
    ReactiveFormHaiComponent,
    ArrayComponent,
    ObjectComponent,
    MenuComponent,
    InputOutputComponent,
    ChartComponent,
    LoginComponent,
    ThuVienAnhComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    SwiperModule,
    CalendarModule,
    AutoCompleteModule,
    SidebarModule,
    MenuModule,
    EditorModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    AgGridModule,
    ToastModule
  ],
  providers: [ConfirmationService, MessageService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
