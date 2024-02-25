import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  actions: Array<any>=[
    {"title":"Competitions","route":"/competitions"},
    {"title":"hunts","route":"/hunts"},
    {"title":"Podium","route":"/podium"},
    {"title":"participations","route":"/participations"},
    {"title":"users","route":"/users"},
  ];

  currentAction: any;
  setCurrentAction(action: any){
    this.currentAction = action;
  }
  user: any;

  ngOnInit() {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString);
    }
  }
  shouldShowAction(action: any): boolean {
    if (this.user) {
      switch (this.user.role) {
        case 'USER':
          return action.route !== '/hunts' && action.route !== '/users';
        case 'JURY':
          return action.route !== '/users';
        default:
          return true;
      }
    }
     return false;
  }

  logout() {
    localStorage.clear();
  }
}
