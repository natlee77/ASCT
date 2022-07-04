import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SkordComponent } from './skord/skord.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import  {TSlistComponent}  from './tslist/tslist.component';
import { AktuellComponent } from './aktuell/aktuell.component';
import {SearchPatientComponent} from './searchpatient/searchpatient.component';
import { SkordtableComponent } from './skordtable/skordtable.component';

const routes: Routes = [
  {path:"searchpatient", component: SearchPatientComponent},
  {path:"aktuell" , component: AktuellComponent}  ,
  {path: "tslist", component: TSlistComponent},
  {path: "patient", component: PatientComponent},
  {path: "home", component: HomeComponent},
  {path: "skord", component: SkordComponent},
  {path: "login", component: LoginComponent},
  {path: "", component: WelcomeComponent},
  {path: "**", component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
