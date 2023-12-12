import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagePropertyComponent } from './manage-property/manage-property.component';
import { ManageTenentComponent } from './manage-tenent/manage-tenent.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { ViewPropertyComponent } from './view-property/view-property.component';
import { AddTenentComponent } from './add-tenent/add-tenent.component';
import { ViewTenentComponent } from './view-tenent/view-tenent.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MapTenantPropertyComponent } from './map-tenant-property/map-tenant-property.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ManagePropertyComponent,
    ManageTenentComponent,
    AddPropertyComponent,
    ViewPropertyComponent,
    AddTenentComponent,
    ViewTenentComponent,
    MapTenantPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
