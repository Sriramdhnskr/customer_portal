import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  RouterModule , Router } from '@angular/router';


@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {

  arr = [1,2,3,4,5];
  name : string;
  constructor(private http : HttpClient , private routes : Router) {

    var out = localStorage.getItem('uname');
    this.http.post('http://localhost:3000/profile',{uname:out}).subscribe((result1) => {
      console.log("DATA",result1);
      this.name = result1['SOAP:Envelope']['SOAP:Body']['ns0:ZCUST_PROFILE_DET.Response']['IT_TABLE'];
      console.log(this.name);
      
    });
   }

  ngOnInit() {
  }



}
