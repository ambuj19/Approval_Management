import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { request } from '../Model/request.model';
import { RequestService } from '../request.service';
import{ToastrService}from'ngx-toastr'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.css']
})

export class MyRequestComponent implements OnInit {
data:request[]=[];
id:any
user: request;
empForm: FormGroup;
initiated=true;
  constructor(private empService:RequestService,private route:Router,private toastr:ToastrService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.empService.getrequest().subscribe(response=>{
      this.data=response;
      this.toastr.success("Opened");
      debugger;
      console.log(this.data);
      this.initiated=true;
    },error=>{
      console.log(error);
      this.initiated=true;;
    })
  }

  public delete(id:number)
  {
    this.empService.deleterequest(id).subscribe(response=>{
      console.log(response);
      this.route.navigate(['/my-request']);
     // window.location.reload();
      this.toastr.success("Deleted");
    },(error:any)=>{
      console.log(error);
    })
  }
}
