import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { RouterModule , Router } from '@angular/router';

@Component({
  selector: 'app-customer-menus',
  templateUrl: './customer-menus.component.html',
  styleUrls: ['./customer-menus.component.scss']
})
export class CustomerMenusComponent implements OnInit {

  constructor(public dialog: MatDialog, public routes : Router) { }

  ngOnInit() {
  }

  onlogin()
  {
    this.dialog.open(LoginComponent , {width: '500px', height: '450px'});
      localStorage.removeItem('name');
      this.routes.navigate(['home']);

  }

}
