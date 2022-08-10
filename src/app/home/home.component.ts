import { Component, OnInit } from '@angular/core';

import { Scholarship } from '../scholarship';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScholarshipService } from '../scholarship.service';
import { AuthenticationService } from '../authentication.service';
//import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { ScholarshipDetails } from '../scholarship-details';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /*products: Observable<Flight[]> | any;

  registerForm: FormGroup | any;
  product: Flight = new Flight();
  submitted = false;

  City: any = ['Bangalore','Chennai', 'Delhi', 'Kolkatta','Mumbai', ]

  constructor(private flightService: FlightService,
              private router: Router) { }

  ngOnInit(): void {
  }
  

  get f() { return this.registerForm.controls; }

  newProduct(): void {
    this.submitted = false;
    //this.product= new Flight();
  }
 
  save() {
    alert(this.product);
    this.flightService.newFlight(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product= new Flight();
    this.gotoList();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
    this.gotoList();    
  }
 
  gotoList() {
    this.router.navigate(['/fdetails']).then(() => {
      window.location.reload();
    });
  }*/



  registerForm: FormGroup | any;
  submitted = false;
 
  City: any = ['Chennai', 'Delhi', 'Kolkatta','Mumbai','Andhra','Bangalore','Telangana','Bihar' ]
  Citys: any = ['india', ]
 
 
  scholarship: ScholarshipDetails = new ScholarshipDetails();
  
  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private fService: ScholarshipService,
              private router: Router) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      country: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      state: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      date: ['', [Validators.required]],
      phoneNo:  ['', [Validators.required]],
      street:  ['', [Validators.required]],
      city:  ['', [Validators.required]],
      students:  ['', [Validators.required]],});
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
 
  changeCity(e: | any) {
    this.registerForm.get('city').setValue(e.target.value, {
     onlySelf: true
    })
  }

  DealerAddress(): void {
    this.submitted = false;
    this.scholarship= new ScholarshipDetails();
  }

  
  onSubmit() {

    this.submitted = true;
    this.scholarship=this.registerForm.value;
    // stop the process here if form is invalid
    //if (this.registerForm.invalid) {
      //  return;
    //}
    this.search();
    // if(this.authenticationService.isUserLoggedIn())
    // {
    // }
    // else{
    //   alert("You are not Logged in please Login");
    //   this.router.navigate(['/login']);
    // }
  }

  search() {
    // alert(this.scholarship.country+" "+this.scholarship.state);
    /*this.authenticationService.saveDealer(this.flight)
    .subscribe(data => console.log(data), error => console.log(error));
    this.flight= new FlightDetails();*/

    this.fService.country = this.scholarship.country;
    this.fService.state = this.scholarship.state;
    this.authenticationService.country1 = this.scholarship.country;
    this.authenticationService.state1 = this.scholarship.state;
    this.fService.date = this.scholarship.date;
    this.fService.students = this.scholarship.students;

    this.gotoList();
  }

  gotoList() {

    this.router.navigate(['/sdetails']);

    if(this.authenticationService.isUserLoggedIn()){
    this.router.navigate(['/sdetails']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }

}
