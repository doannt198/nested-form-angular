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
import { TestComponent } from './components/home/test/test.component';
import { Test1Component } from './components/home/test1/test1.component';
import { ReactiveFormComponent } from './components/home/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './components/home/template-driven-form/template-driven-form.component';
import { TemplateDrivenFormHaiComponent } from './components/home/template-driven-form-hai/template-driven-form-hai.component';
import { ReactiveFormHaiComponent } from './components/home/reactive-form-hai/reactive-form-hai.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDetailComponent,
    HomeAddComponent,
    HomeEditComponent,
    TestComponent,
    Test1Component,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    TemplateDrivenFormHaiComponent,
    ReactiveFormHaiComponent,
    
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
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
