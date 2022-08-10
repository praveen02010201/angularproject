import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
//import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
//import { AddFlightComponent } from './add-flight/add-flight.component';
//import { DeleteFlightComponent } from './delete-flight/delete-flight.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { BookingListComponent } from './booking-list/booking-list.component';
//import { SelectFlightComponent } from './select-flight/select-flight.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
//import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { FaqComponent } from './faq/faq.component';
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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    AdminLoginComponent,
    HomeComponent,
    //FlightDetailsComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
   // AddFlightComponent,
    //DeleteFlightComponent,
    PaymentComponent,
    BookingDetailsComponent,
    BookingListComponent,
    //SelectFlightComponent,
    FooterComponent,
    NavComponent,
   // UpdateFlightComponent,
    ThankyouComponent,
    FaqComponent,
    AddScholarshipComponent,
    DeleteScholarshipComponent,
    ScholarshipDetailsComponent,
    SelectScholarshipComponent,
    UpdateScholarshipComponent,
    DetailsComponent,
    BasicDetailsComponent,
    TenthDetailsComponent,
    TwelthDetailsComponent,
    AcademicDetailsComponent,
    FeeDetailsComponent,
    OtherDetailsComponent,
    ContactDetailsComponent,
    SubmitDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
