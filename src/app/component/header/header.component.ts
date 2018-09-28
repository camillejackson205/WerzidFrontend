import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(public authService: AuthService, private _router: Router) { }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((loggedInUserStatus: boolean) =>{
      this.isLoggedIn = loggedInUserStatus;
    });
  }
  
  onLogout() {
    this.authService.logOut();
    this.isLoggedIn = false;
    this._router.navigate(['/home']);
  }
}

export interface UserData  {
  user: string;
  isloggedin: boolean;
}