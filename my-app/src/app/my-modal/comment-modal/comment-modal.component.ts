import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { request } from 'src/app/Model/request.model';
import { RequestService } from 'src/app/request.service';

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.css']
})
export class CommentModalComponent implements OnInit {
emp:any;
requestdata:request[]=[];
val:any;
myGroup: FormGroup;
  constructor(public routes:ActivatedRoute,private formBuilder: FormBuilder,private  dialogRef:  MatDialogRef<CommentModalComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any,private empService:RequestService,private route:Router,private toastr:ToastrService) {
  }



  ngOnInit(): void {

    this.myGroup = new FormGroup({



      description: new FormControl()

  });
  }
  public  comments() {
    debugger;
    this.empService.addcomment(this.data).subscribe(response=>{

      console.log(response);
      this.dialogRef.close();

      })

    }
}
