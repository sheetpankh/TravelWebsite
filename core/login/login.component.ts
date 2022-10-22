import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userDetails=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  })

  constructor(private _Authservice:AuthserviceService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  SubmitUserDetails(){
    let username=this.userDetails.get('username')?.value;
    let password=this.userDetails.get('password')?.value;

    this._Authservice.getuserDetails().subscribe((response:any)=>{
    // let usersdetails: any =response;
    let userdetails: any[] = response.users;

    let userfound=userdetails.find(el=>{
      return el.username==username && el.password==password;
    })
    console.log('userfound',userfound)

    if(userfound){
      sessionStorage.setItem('loggedInuser','true')
      sessionStorage.setItem('role',userfound.role)
      this.dialog.closeAll()
    }else{
       alert('please enter correct username & password')
       sessionStorage.setItem('loggedInuser','false')

    }
    })
  }
}
