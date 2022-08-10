

import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ScholarshipService } from '../scholarship.service';
import { Scholarship } from '../scholarship';


@Component({
  selector: 'app-add-scholarship',
  templateUrl: './add-scholarship.component.html',
  styleUrls: ['./add-scholarship.component.css']
})
export class AddScholarshipComponent implements OnInit {
  registerForm: FormGroup | any;
  scholarship: Scholarship = new Scholarship();
  submitted = false;

  City: any = ['Bangalore','Chennai', 'Delhi', 'Kolkatta','Mumbai', ]

  constructor(private scholarshipService: ScholarshipService,
              private router: Router) { }

  ngOnInit(): void {
  }

  get f() { return this.registerForm.controls; }

  newProduct(): void {
    this.submitted = false;
    this.scholarship= new Scholarship();
  }
 
  save() {
    this.scholarshipService.newScholarship(this.scholarship)
      .subscribe(data => console.log(data), error => console.log(error));
    this.scholarship= new Scholarship();
    this.gotoList();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
 
  gotoList() {
    this.router.navigate(['/addscholarship']).then(() => {
      window.location.reload();
    });
  }

  gotoList1() {
    this.router.navigate(['/deletescholarship']).then(() => {
      window.location.reload();
    });
  }

}
