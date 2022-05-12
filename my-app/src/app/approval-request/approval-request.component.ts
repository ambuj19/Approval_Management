import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';
import{ToastrService}from'ngx-toastr'
@Component({
  selector: 'app-approval-request',
  templateUrl: './approval-request.component.html',
  styleUrls: ['./approval-request.component.css']
})
export class ApprovalRequestComponent implements OnInit {
  empForm: FormGroup;
  constructor( private formBuilder: FormBuilder,private empService:RequestService,private router: Router,private toastr:ToastrService) { }
  menuItems: MenuItem[] = [
    {
      label: 'Hi, Ambuj',
      icon: 'account_box'
    },

    {
      label: 'My Request',
      icon: 'question_answer'
    },
    {
      label: 'View History',
      icon: 'help'
    },
    {
      label: 'Logout',
      icon: 'login'
    },

  ];
  ngOnInit(): void {
    this.empForm=this.formBuilder.group({

      purpose:['',Validators.required],
      description:['',Validators.required],
      Approver:['',Validators.required],
      Estimated:['',Validators.required],
      Advance:['',Validators.required],
      date:['',Validators.required],
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
