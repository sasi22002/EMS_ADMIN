import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagePropertyComponent } from './manage-property/manage-property.component';
import { ManageTenentComponent } from './manage-tenent/manage-tenent.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { AddTenentComponent } from './add-tenent/add-tenent.component';
import { ViewTenentComponent } from './view-tenent/view-tenent.component';
import { ViewPropertyComponent } from './view-property/view-property.component';
import { authGuard } from './guards/auth.guard';
import { MapTenantPropertyComponent } from './map-tenant-property/map-tenant-property.component';

const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'rems', component:DashboardComponent,children:[
    {path:'manage-property', component:ManagePropertyComponent},
    {path:'manage-tenent', component:ManageTenentComponent},
    {path:'manage-property/add-property', component:AddPropertyComponent},
    {path:'manage-tenent/add-tenent', component:AddTenentComponent},
    {path:'manage-tenent/view/:id', component:ViewTenentComponent},
    {path:'manage-property/view/:id', component:ViewPropertyComponent},
    {path:'map-tenents', component:MapTenantPropertyComponent},
  ],
  canActivate:[
    authGuard
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
