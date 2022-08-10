import { Component, OnInit } from '@angular/core';

import { Scholarship } from '../scholarship';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ScholarshipService } from '../scholarship.service';
@Component({
  selector: 'app-update-scholarship',
  templateUrl: './update-scholarship.component.html',
  styleUrls: ['./update-scholarship.component.css']
})
export class UpdateScholarshipComponent implements OnInit {

  id: number = 0;
  scholarship: Scholarship | any;
  submitted = false;
  products: Observable<Scholarship[]> | any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private scholarshipService: ScholarshipService) { }

  ngOnInit(): void {

    this.scholarship = new Scholarship();
   
    this.id = this.route.snapshot.params['id'];
    
    this.scholarshipService.getScholarshipById(this.id)
      .subscribe(data => {
        console.log(data)
        this.scholarship = data;
      }, error => console.log(error));
  }

  updateScholarship() {
    this.scholarshipService.updateScholarship(this.id, this.scholarship)
      .subscribe(data => console.log(data), error => console.log(error));
    this.scholarship = new Scholarship();
    //this.reloadData();
    this.gotoList();
  }
 
  onSubmit() {
    this.updateScholarship();    
  }
  reloadData() {
    //this.products = this.flightService.getProductsList();
  }
  gotoList() {
    this.router.navigate(['/addscholarship']).then(() => {
      window.location.reload();
    });
  }

}
