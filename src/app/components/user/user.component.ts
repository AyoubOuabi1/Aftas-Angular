import {Component, OnInit} from '@angular/core';
import {UserModule} from "../../entities/member/userModule";
import {UserService} from "../../services/member/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  users !: UserModule [];
  selectedUser: UserModule | null = null;

  constructor(private userService : UserService) {
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(response => {
      this.users = response;
      console.log(this.users);
    });
  }

  updateState(id: number)  {
    this.userService.updateUser(id).subscribe(response => {
      this.users = response;
      console.log(this.users);
    })

  }
}
