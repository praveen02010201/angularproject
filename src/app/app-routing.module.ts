import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterModule, Routes,CanActivate } from '@angular/router';

import { AdminLoginComponent } from './admin-login/admin-login.component';
//import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
//import { AddFlightComponent } from './add-flight/add-flight.component';
//import { DeleteFlightComponent } from './delete-flight/delete-flight.component';
import { PaymentComponent } from './payment/payment.component';
//import { SelectFlightComponent } from './select-flight/select-flight.component';
//import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { FaqComponent } from './faq/faq.component';
import { AuthenticationService } from './authentication.service';
import { AddScholarshipComponent } from './add-scholarship/add-scholarship.component';
import { DeleteScholarshipComponent } from './delete-scholarship/delete-scholarship.component';
import { ScholarshipDetailsComponent } from './scholarship-details/scholarship-details.component';
import { SelectScholarshipComponent } from './select-scholarship/select-scholarship.component';
import { UpdateScholarshipComponent } from './update-scholarship/update-scholarship.component';
import { DetailsComponent } from './details/details.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { TenthDetailsComponent } from './tenth-details/tenth-details.component';
import { TwelthDetailsComponent } from './twelth-details/twelth-details.component';
import { AcademicDetailsComponent } from './academic-details/academic-details.component';
import { FeeDetailsComponent } from './fee-details/fee-details.component';
import { OtherDetailsComponent } from './other-details/other-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { SubmitDetailsComponent } from './submit-details/submit-details.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'adminlogin', component:AdminLoginComponent},
  {path:'sdetails', component:ScholarshipDetailsComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path:'register', component:RegisterComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  //{path:'addflight', component:AddFlightComponent},
  {path:'addscholarship', component:AddScholarshipComponent},
  {path:'deletescholarship', component:DeleteScholarshipComponent},
  {path:'payment', component:PaymentComponent},
  {path:'selectscholarship/:id', component:SelectScholarshipComponent},
  {path:'updatescholarship', component:UpdateScholarshipComponent},
  {path:'bookscholarship', component:BookingListComponent},
  {path:'bookingdetails/:id', component:BookingDetailsComponent},
  {path:'thankyou', component:ThankyouComponent},
  {path:'faq', component:FaqComponent},
  {path:'details', component:DetailsComponent},
  {path:"basicdetails",component:BasicDetailsComponent},
  {path:"tenthdetails",component:TenthDetailsComponent},
  {path:"twelthdetails",component:TwelthDetailsComponent},
  {path:"academicdetails",component:AcademicDetailsComponent},
  {path:"feedetails",component:FeeDetailsComponent},
  {path:"otherdetails",component:OtherDetailsComponent},
  {path:"contactdetails",component:ContactDetailsComponent},
  {path:"submitdetails",component:SubmitDetailsComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
