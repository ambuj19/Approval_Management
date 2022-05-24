import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { request } from '../Model/request.model';
import { RequestService } from '../request.service';
import{ToastrService}from'ngx-toastr'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { MyModalComponent } from '../my-modal/my-modal.component';

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

      debugger;
      console.log(this.data);
      this.initiated=true;
    },error=>{
      console.log(error);
      this.initiated=true;
    })
  }

  public delete(id:number)
  {
    this.empService.deleterequest(id).subscribe(response=>{
      console.log(response);
      this.route.navigate(['/my-request']);
      window.location.reload();
      this.toastr.success("Deleted");
    },(error:any)=>{
      console.log(error);
    })
  }

  title = 'angular-material-modals';

  city: string;
  name: string;
  food_from_modal: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(MyModalComponent, {
      width: '400px',
      data: { name: this.name, animal: this.city }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.city = result;
      this.food_from_modal = result.food;
    });
  }
}
