import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent{

  constructor(private router: Router, private authService: AuthService) { }

    login(){
    //go to backend
    //user
    this.authService.login()
      .subscribe( resp => { 
        console.log(resp.email) 

        if(resp.id){
          this.router.navigate(['./characters']);
        }
      } )


    //this.router.navigate(['./characters']);
  }
}
