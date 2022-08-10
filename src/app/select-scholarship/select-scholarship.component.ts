import { Component, OnInit } from '@angular/core';
import { Scholarship } from '../scholarship';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ScholarshipService } from '../scholarship.service';
@Component({
  selector: 'app-select-scholarship',
  templateUrl: './select-scholarship.component.html',
  styleUrls: ['./select-scholarship.component.css']
})
export class SelectScholarshipComponent implements OnInit {

  scholarshipId: string = "0";
  id: string = "0";
  scholarship: Scholarship | any;
  newdate1 = '';
  

  constructor(private route: ActivatedRoute,
              private router: Router,
              private scholarshipService: ScholarshipService) { }

              
  ngOnInit(): void {

    this.scholarship = new Scholarship();

    this.newdate1 = this.scholarshipService.date;
    
    this.id = this.route.snapshot.params['id'];  /* Snapshot is used to get the Route Parameters */
    
    /**
     * As a publisher, you create an Observable instance that defines a subscriber function. 
     * This is the function that is executed when a consumer calls the subscribe() method. 
     * The subscriber function defines how to obtain or generate values or messages to be published.
     */
    //alert(this.id);
    this.scholarshipId = this.id;
    this.scholarshipService.scholarshipId = this.id;
    this.scholarshipService.getScholarshipDetails(this.id)
      .subscribe(data => {
        console.log(data)
        this.scholarship = data;
      }, error => console.log(error));
  }


}
