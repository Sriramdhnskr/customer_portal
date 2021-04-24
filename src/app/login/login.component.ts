import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogRef } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetAuthService } from 'src/app/get-auth.service';
import {  RouterModule , Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //user = {username: '', password: '', remember: false};
  public uname: string;
public pass1: string;
public pass2: string;
public name: string;
public res:any;

  constructor(private api: GetAuthService, private http:HttpClient,  private routes: Router,public dialogRef: MatDialogRef<LoginComponent>) { }

  // ngOnInit() {
  // }

  // onSubmit() {
  //   console.log('User: ', this.user);
    
  //   this.dialogRef.close();
  // }
  // //

  // constructor(private api: GetAuthService, private http:HttpClient) {
    
  //  }

  ngOnInit(): void {
  }
  
  fun()
  {
    //http request
    // this.res = this.api.authLogin().subscribe((data)=>{
    //   console.log("DATA",data);
    //   this.name=data["SOAP:Envelope"]["SOAP:Body"]["ns0:ZFUNCTION_TC_LOGIN.Response"].OUT_NAME._text;
    // });
    // alert(this.uname.toUpperCase()+" "+this.pass1.toUpperCase());
    var auth = {
   uname : this.uname,
   pass1 : this.pass1
    }
    localStorage.setItem('uname',this.uname);
//     this.http.post('http://localhost:3000/login',auth).subscribe((result1) => {
//       console.log("DATA",result1);
//       this.name = result1['SOAP:Envelope']['SOAP:Body']['ns1:MT_cust_sr_response'].status._text;
//     });
//     }
    
//   showname()
//   {
//     alert("Welcome "+this.name);
//     this.name=null;
//   }
  
// }

this.http.post('http://localhost:3000/login',auth).subscribe((result1) => {
      console.log("DATA",result1);
      this.name = result1['SOAP:Envelope']['SOAP:Body']['ns1:MT_cust_sr_response']['status']._text;
      if(this.name=="SUCCESS"){
        localStorage.setItem('name','SUCCESS');
        this.routes.navigate(['/profile']);
      }
      else
      {
        console.log('Invalid username or password');
      }
    });
    // if(this.name=="SUCCESS"){
    //   localStorage.setItem('name','SUCCESS');
    //   this.routes.navigate(['/profile']);
    // }
    // else
    // {
    //   console.log('Invalid username or password');
    // }

    }
    


// this.http.post('http://localhost:3000/login',auth).subscribe((result1) => {
//   console.log("DATA",result1);
//   this.name = result1['SOAP:Envelope']['SOAP:Body']['ns1:MT_cust_sr_response'].status._text;
// });
// if(this.name == "SUCCESS"){
//   localStorage.setItem('name','SUCCESS');
//   this.routes.navigate(['/profile']);
// }
// else
// {
//   console.log('Invalid username or password');
// }
// }

showname()
{
alert("Welcome "+this.name);
// if(this.name=="SUCCESS"){
//   this.routes.navigate(['/dashboard']);
// }
this.name=null;
}



}
