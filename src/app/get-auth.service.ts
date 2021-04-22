import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetAuthService {

  constructor(
    private http:HttpClient
  ) { }
  authLogin(uname:string , pass:string)
  {
    const httpParams = new HttpParams({
  fromObject:{
    user:uname,
    password: pass
  }
});

    return this.http.get('http://localhost:3000/login',
    {
      params: httpParams

    });
  }
}
