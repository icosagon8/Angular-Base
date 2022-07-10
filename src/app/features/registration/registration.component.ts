import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/auth/services/auth.service';
import { emailValidator } from 'src/app/shared/directives';
import { UserRoles } from 'src/app/shared/models/shared.models';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
    form!: FormGroup;
    showPassword = false;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.createForm();
    }

    onSubmit() {
        const user = { ...this.form.value, role: UserRoles.User };
        this.authService.register(user);
    }

    onToggle(passwordVisibility: any): void {
        this.showPassword = !this.showPassword;
        passwordVisibility.toggle();
    }

    get name() {
        return this.form.get('name');
    }

    get email() {
        return this.form.get('email');
    }

    get password() {
        return this.form.get('password');
    }

    private createForm() {
        this.form = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(6)]),
            email: new FormControl('', [
                Validators.required,
                emailValidator('^(.+)@(.+)$'),
            ]),
            password: new FormControl('', [Validators.required]),
        });
    }
}
