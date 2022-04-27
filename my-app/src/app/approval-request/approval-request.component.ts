import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-approval-request',
  templateUrl: './approval-request.component.html',
  styleUrls: ['./approval-request.component.css']
})
export class ApprovalRequestComponent implements OnInit {

  constructor() { }
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
  }

}
