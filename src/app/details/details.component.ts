import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {ProductdetailsService} from '../productdetails.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private details:ProductdetailsService) {
      console.log("OOOOOOOOOOOOOOO")

   }
  // fetchData = function() {
  //   this.details.fetchData().subscribe(
  //     data => {
  //      // this.router.navigate(["/details"]);
  //     }
  //   )
  // }

  detailsproduct;
  ngOnInit() {
    this.details.fetchData().subscribe(data=> this.detailsproduct=data);
 //this.fetchData();
 console.log("qqqqqqqqqqqq")
 
  
  }

}




