import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'; 

import { BookingsComponent } from './pages/bookings/bookings.component';
import { CarsComponent } from './pages/cars/cars.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { CarservicesComponent } from './pages/carservices/carservices.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    BookingsComponent,
    CarsComponent,
    DashboardComponent,
    LayoutComponent,
    CarservicesComponent,
    AboutusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
