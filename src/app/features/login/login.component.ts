import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    emailPattern = '^(.+)@(.+)$';
    showPassword = false;

    constructor(private authService: AuthService) {}

    onLogin(loginForm: NgForm): void {
        this.authService.login(loginForm.value).subscribe();
    }

    onToggle(passwordVisibility: any): void {
        this.showPassword = !this.showPassword;
        passwordVisibility.toggle();
    }
}
