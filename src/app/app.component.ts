import { Component, OnInit } from '@angular/core';
import {ProductdetailsService} from './productdetails.service';
import {HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  constructor(private data:ProductdetailsService, private route:ActivatedRoute,private httpss: HttpClient, private router: Router ) {}

result;
  ngOnInit(){
    this.data.fetchData().subscribe(data=> this.result=data);
  }

  isDetails:boolean= false;

  details(){
    //console.log(data);
   // this.data.fetchData().subscribe(data=> this.result=data);
    this.httpss.get("http://13.232.210.72:9596/product/group").subscribe((res:Response) => {
      console.log(res);
     // this.isAdded = true;
    // window.location.href=`${this.url}details`;
      //this.router.navigate(["details"]);
      this.isDetails =true;

    })
  }

  title = 'INGProductGroups';
}
