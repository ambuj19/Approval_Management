import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router}from '@angular/router';
import { AuthService } from '../shared-module/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private authService:AuthService) { }
  emails: string = '';
  passwords:string='';
  public exform = new FormGroup({

    frmemail: new FormControl([Validators.required, Validators.email]),
    frmpassword: new FormControl([Validators.required,Validators.minLength(3)])
    //decimalPrecision: new FormControl()


  });
  get eform(){
    return this.exform.controls;
  }
  ngOnInit(): void {
  }

  navigation(){
    this.authService.IsAdmin(this.emails);

  }
}
