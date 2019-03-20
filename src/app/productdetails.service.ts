import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  constructor(private http:HttpClient,private router:Router) { }
  products = [];
  // fetchData = function() {
  //   this.http.get("http://10.117.189.36:9595/product/group").subscribe(
  //     (res: Response) => {
  //       this.products = res;
  //     }
  //   )
  // }

  fetchData():Observable<any>{
    return  this.http.get("http://10.117.189.228:9595/product/group");
  }
  

}



