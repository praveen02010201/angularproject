import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-details',
  templateUrl: './submit-details.component.html',
  styleUrls: ['./submit-details.component.css']
})
export class SubmitDetailsComponent implements OnInit {
  optionValue:any;
  schemeValue:any;
  constructor() { }

  ngOnInit(): void {
  }

}
