import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    emailPattern = '^(.+)@(.+)$';
    showPassword = false;

    onLogin(loginForm: NgForm): void {
        console.log(loginForm.value);
    }

    onToggle(passwordVisibility: any): void {
        this.showPassword = !this.showPassword;
        passwordVisibility.toggle();
    }
}
