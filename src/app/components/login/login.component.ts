import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {


  constructor(private authService: AuthService, private  router : Router) {}
  ngOnInit() {

  }



  onSubmit(formLogin : NgForm){
    if (!formLogin.valid) {
      return;
    }
    this.authService.login(
      formLogin.value.email, formLogin.value.password).subscribe({
      next: user => {
        console.log(user);
        this.router.navigate(['competitions']);

      },
      error: error => {
        console.log(error);
      }
    })
  }

}
