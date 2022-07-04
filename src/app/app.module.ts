import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatNativeDateModule} from '@angular/material/core'
import { MatTableModule} from '@angular/material/table';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { SkordComponent } from './skord/skord.component';
import { TSlistComponent } from './tslist/tslist.component';
import { AktuellComponent } from './aktuell/aktuell.component';
import { SearchPatientComponent} from './searchpatient/searchpatient.component';
import { SkordtableComponent } from './skordtable/skordtable.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    LoginComponent,
    PatientComponent,
    SkordComponent,
    TSlistComponent,
    AktuellComponent,
    SearchPatientComponent,
    SkordtableComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTableModule,
    MatInputModule,

    MatDatepickerModule,
    // MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [    CUSTOM_ELEMENTS_SCHEMA  ],
  exports: [

  ]
})
export class AppModule { }
