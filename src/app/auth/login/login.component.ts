import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {UserRequest} from "../model/user-request.model";
import {AuthService} from "../auth.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private readonly service: AuthService,
              private readonly route: Router) {
  }

  isLoding:boolean = false

  imgSrc: string = 'assets/images/bg3.jpg'
  imgAlt: string = 'bg-1'

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  onLogin(data: UserRequest) {
    this.service.login(data).subscribe({
      next: (res) => {
        let token = res.data.token
        if (token) {
          sessionStorage.setItem("token", token)
          this.route.navigateByUrl('home')
        }
      },
      error: (err) => {
        console.log('ERROR: ', err)
        Swal.fire('Invalid Username or Password')
      }
    })
  }
}
