import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import { Router } from '@angular/router';
import { ScholarshipService } from '../scholarship.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  registerForm: FormGroup | any;
  
  user: User = new User();
  submitted = false;
  
  constructor(private formBuilder:FormBuilder ,private scholarshipService: ScholarshipService, private router: Router) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      name: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      aadharNo:  ['', [Validators.required]],
      studentNo:  ['', [Validators.required]],});
  }

  /*newBooking(): void {
    this.submitted = false;
    this.user = new User();
  }*/

  save() {
    /*this.bookingService.createBooking(this.user)
    .subscribe(data => console.log(data),
    error => console.log(error));*/

    this.scholarshipService.name = this.user.name;
    this.scholarshipService.aadharNo = this.user.aadharNo;
    this.scholarshipService.students = this.user.studentNo;
    // //alert(this.flightService.name); 

    this.user = new User();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/bookingdetails/' + this.scholarshipService.scholarshipId]);
  }

}
