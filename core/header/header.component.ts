import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, public router:Router) { }

  ngOnInit(): void {
  }
  clicktoLogin(){
    const dialogRef=this.dialog.open(LoginComponent);
  }
  clicktologout(){
    this.router.navigateByUrl('logout')
  }
}
