import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { CarsComponent } from './pages/cars/cars.component';
import { CarservicesComponent } from './pages/carservices/carservices.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        title:'dashboard'
      },
      {
        path: 'bookings',
        component: BookingsComponent,
        title:'bookingservices'
      },
      {
        path: 'cars',
        component:CarsComponent,
        title:'add_rental_services'
      },
      {
        path:'carservices',
        component:CarservicesComponent,
        title:'repairbooking'
      },
      {
        path:'aboutus',
        component:AboutusComponent,
        title:'aboutus'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
