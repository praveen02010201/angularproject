import { Component, OnInit } from '@angular/core';

import { ScholarshipService } from '../scholarship.service';

import { observable, Observable } from 'rxjs';
import { Scholarship } from '../scholarship';
import { ScholarshipDetails } from '../scholarship-details';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  scholarships:Observable<Scholarship>;

  scholarship = "";

  //flight1: Flight | any;

  name1 = '';
  aadharNo1 = '';
  studentNo1 = 0;

  min1='min';
  newdate1 = '';

  constructor(private scholarshipService:ScholarshipService,
              private router:Router,
              private route : ActivatedRoute) {this.scholarships= new Observable()}

  ngOnInit(): void {
    //alert("Reloading may cause Data Loss, continue ?");
    this.name1 = this.scholarshipService.name;
    this.aadharNo1 = this.scholarshipService.aadharNo;
    this.studentNo1 = this.scholarshipService.students;

    //this.flight1 = new this.flight1;

    this.scholarship = this.route.snapshot.params['id'];
   console.log(this.scholarship);
    /*this.flightService.getFlightDetails(this.flightService.flightId)
      .subscribe(data => {
        console.log(data)
        this.flight1 = data;
      }, error => console.log(error));*/

    this.reloadData();
  }

  reloadData() {

    //alert("in reload data");
    //alert(this.flight.source);

    /*this.flightService.getFlightsList()
      .subscribe(data => {
        console.log(data)
        this.flights = data;
      }, error => console.log(error));*/

    //--alert(this.flightService.source1+" "+this.flightService.destination1);
    this.newdate1 = this.scholarshipService.date;
    this.scholarships = this.scholarshipService.getScholarshipDetails(this.scholarship); 
    //alert("in reload data" + this.flights);
  }

  ScholarshiptDetails(sNumber: number){
    //alert(id);
    this.router.navigate(['selectscholarship', sNumber]);
  }

  editScholarship(id: number) {
    this.router.navigate(['update',id])  // navigate to component from a method
  }

  deleteScholarship(id: string) {
    this.scholarshipService.deleteScholarship(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
