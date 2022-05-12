import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated=false;
  constructor(private router: Router) { }
  public IsAdmin(email:any)
  {
    debugger;
   // console.log();
    if(email=='user')
    {
     this.isAuthenticated=true;
     this.router.navigate(['/request'])
     //return true;
    }
    else if(email=='user@123'){
      this.isAuthenticated=true;
        this.router.navigate(['/user'])
    //  return false;
    }
  }
}
