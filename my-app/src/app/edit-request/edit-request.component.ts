import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { request } from '../Model/request.model';
import { RequestService } from '../request.service';
@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css']
})
export class EditRequestComponent implements OnInit {
  user: request;
  users:request[]=[];
  val:any;
  empForm: FormGroup;
  constructor( private formBuilder: FormBuilder,public route:ActivatedRoute,private empService:RequestService,private router: Router,private toastr:ToastrService) { }

  ngOnInit() {
    let sub=this.route.params.subscribe(params=>{
      debugger;
      this.val=params['id'];
    })
    console.log(this.val);
    this.empService.getUpdateUser(this.val).subscribe(data=>{
      this.user=data

    })
    this.empForm=this.formBuilder.group({
      id:['',Validators.required],
      purpose:['',Validators.required],
      description:['',Validators.required],
      Approver:['',Validators.required],
      Estimated:['',Validators.required],
      Advance:['',Validators.required],
      date:['',Validators.required],
    })
  }
  update(){
    this.empService.updateUser(this.user).subscribe(data=>{

    });
    this.getUsers();
    this.router.navigate(['/admin']);
  }
  getUsers(){
    this.empService.getrequest().subscribe((response)=>{
      this.users=response;
    })
  }
  public onFormSubmit(form: NgForm)
  {
    console.log(form);

   this.empService.addrequest(form).subscribe(response=>{

    console.log(response);
      const id=response['id'];

      //this.router.navigate(['details',id])
     this.router.navigate(['/request'])

      this.toastr.success("Request Added")

    },(error:any)=>{
      console.log(error);
    })
  }
}
