import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {RegistrationDto} from "../../entities/user/registrationDto.module";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService: AuthService,private router : Router) {}
  ngOnInit() {

  }
  onSubmit(formLogin : NgForm){
    if (!formLogin.valid) {
      return;
    }
    const user: RegistrationDto = { ...formLogin.value };

    this.authService.register(user).subscribe({
      next: user => {
        console.log(user);
        this.router.navigate(['/competitions']);
      },
      error: error => {
        console.log(error);
      }
    })
  }
}
