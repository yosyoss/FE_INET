import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../auth.service";
import {FormControl, FormGroup} from "@angular/forms";
import {UserRequest} from "../model/user-request.model";
import Swal from "sweetalert2";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    imgSrc: string = 'assets/images/bg3.jpg'
    imgAlt: string = 'bg-1'

    constructor(private router: Router,
                private readonly authService: AuthService) {}

  registerForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

    onRegister(data: UserRequest) {
        this.authService.register(data).subscribe({
            next: (res) => {
                console.log('Registration successful:', res);
                alert('Registration successful!\nPlease proceed to login.');
                this.router.navigateByUrl('');
            },
            error: (err) => {
                console.log('Registration error:', err);
                Swal.fire('Registration failed. Please try again.');
            }
        });
    }

    goBack() {
        this.router.navigateByUrl('');
    }
}
