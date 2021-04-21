import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-customer-menus',
  templateUrl: './customer-menus.component.html',
  styleUrls: ['./customer-menus.component.scss']
})
export class CustomerMenusComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onlogin()
  {
    this.dialog.open(LoginComponent , {width: '500px', height: '450px'});
  }

}
