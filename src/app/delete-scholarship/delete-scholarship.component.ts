import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScholarshipService } from '../scholarship.service';
import { Scholarship } from '../scholarship';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete-scholarship',
  templateUrl: './delete-scholarship.component.html',
  styleUrls: ['./delete-scholarship.component.css']
})
export class DeleteScholarshipComponent implements OnInit {

  products: Observable<Scholarship[]> | any;

  submitted = false;

  constructor(private scholarshipService: ScholarshipService, 
              private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.products = this.scholarshipService.getProductsList1();
  }

  //onSubmit() {
    //this.submitted = true;
    //this.deleteProduct();    
  //}

  productDetails(id: number){
    this.router.navigate(['details', id]);
  }

  editProduct(id: number) {
    this.router.navigate(['update',id])  // navigate to component from a method
  }
  
  deleteProduct(id: string) {

    console.log(id)
    this.scholarshipService.deleteScholarship(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/deletescholarship']).then(() => {
      window.location.reload();
    });
  }

}
