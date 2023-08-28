import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loggedInUser: string | null = null;
  isMenuOpen: boolean = false;
  imgSrc: string = 'assets/images/bg1.jpg'
  imgAlt: string = 'bg-1'
  constructor(private router: Router,
              private readonly authService: AuthService) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  logout() {
    this.authService.logout();
  }
}
