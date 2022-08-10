import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Scholarship } from '../scholarship';
import { ScholarshipDetails } from '../scholarship-details';
import { ScholarshipService } from '../scholarship.service';
@Component({
  selector: 'app-scholarship-details',
  templateUrl: './scholarship-details.component.html',
  styleUrls: ['./scholarship-details.component.css']
})
export class ScholarshipDetailsComponent implements OnInit {

  
  scholarships:Observable<Scholarship[]> | any;

  scholarship : ScholarshipDetails = new ScholarshipDetails();

  min='min';
  newdate = '';
  scholarshipId = "0";

  constructor(private scholarshipService: ScholarshipService, 
              private router:Router,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    
    this.scholarship = this.route.snapshot.params['scholarship'];

    this.reloadData();
  }

  reloadData() {

    this.newdate = this.scholarshipService.date;
    this.scholarships = this.scholarshipService.getScholarship(this.scholarshipService.country,this.scholarshipService.state); 
    //alert(this.flights.fNumber);
  }

  ScholarshipDetails(sNumber: string){
    //alert(id);
    this.scholarshipId = sNumber;
    this.scholarshipService.scholarshipId = sNumber;
    this.router.navigate(['basicdetails']);
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
