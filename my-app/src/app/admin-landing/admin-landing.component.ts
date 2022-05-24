import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { request } from '../Model/request.model';
import { CommentModalComponent } from '../my-modal/comment-modal/comment-modal.component';
import { RequestService } from '../request.service';


@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.css']
})
export class AdminLandingComponent implements OnInit {
  data:request[]=[];
  id:any
  val:any;
  description:string;
  user: request;
  check:boolean=true;
  rejectcheck:boolean=false;
  constructor(public routes:ActivatedRoute,private empService:RequestService,private route:Router,private toastr:ToastrService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.empService.getrequest().subscribe(response=>{
      this.data=response;

      debugger;
      console.log(this.data);
      // this.initiated=true;
    },error=>{
      console.log(error);
      // this.initiated=true;
    })

  }
  approving(id:number,purpose:string,description:string,Approver:string,Approved:boolean,Reject:boolean,Estimated:Number,Advance:Number,date:string) {



    this.empService.approval(id,{id:id,purpose:purpose,description:description,Approver:Approver,Approved:this.check,Reject:this.rejectcheck,Estimated:Estimated,Advance:Advance,date:date}).subscribe(res => {

      window.location.reload();
    })

}

openDialog(id:number): void {
  let sub=this.routes.params.subscribe(params=>{
    debugger;
    this.val=params[id];
  })
  const dialogRef = this.dialog.open(CommentModalComponent, {
    width: '400px',
    data: {id:this.id=id,
    description:this.description=''}
  });


}
}
